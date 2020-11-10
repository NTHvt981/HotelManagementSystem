import { map } from 'rxjs/operators';
import { KhachHang } from './../models/khach-hang';
import { firebaseSerialize } from "./common-functions";
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class KhachHangService {
  private collection: AngularFirestoreCollection<KhachHang>

  constructor(private firestore: AngularFirestore) {
    this.collection = this.firestore.collection('khách hàng')
  }

  getNewId(): string {
    let timeSec = (new Date()).valueOf().toString();
    return 'KH' + 
      timeSec.substring(0, 3) + '-' +
      timeSec.substring(4, 8) + '-' +
      timeSec.substr(9);
  }

  create(khach: KhachHang): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      this.collection.doc(khach.Ma).set(firebaseSerialize(khach))
        .then(() =>
          resolve('create khách hàng succeed')
        )
        .catch((reason) => 
          reject(reason as string)
        )
    })
  }

  update(khach: KhachHang): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      this.collection.doc(khach.Ma).update(firebaseSerialize(khach))
        .then(() =>
          resolve('update khách hàng succeed')
        )
        .catch((reason) => 
          reject(reason as string)
        )
    })
  }

  erase(id: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      this.collection.doc(id).update({
        HienThi: false
      })
        .then(() =>
          resolve('update khách hàng succeed')
        )
        .catch((reason) => 
          reject(reason as string)
        )
    })
  }

  delete(id: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      this.collection.doc(id).delete()
      .catch((reason) => reject(reason))
      .then(() => resolve('delete khách hàng succeed'))
    })
  }


  /**
   * read data section
   * devide into 4 part
   * read single once
   * read single live change
   * read list once
   * read list live change
   */
  readOnce(id: string): Promise<KhachHang> {
    return new Promise<KhachHang>((resolve, reject) => {
      this.collection.doc<KhachHang>(id).get().subscribe((doc) => {
        resolve(doc.data() as KhachHang)
      },
      (error) => console.log(error))
    })
  }

  readAllOnce(): Promise<KhachHang[]> {
    return new Promise<KhachHang[]>((resolve, reject) => {
      this.collection.get().subscribe((query) => {
        let dsKhach: KhachHang[] = []

        query.docs.map((doc) => {
          let khach = doc.data() as KhachHang;
          if (khach.HienThi)
            dsKhach.push(khach)
        })

        resolve(dsKhach)
      })
    })
  }

  readAllOnceBy(ma: string, ten: string, gt: string, sdt: string): Promise<KhachHang[]> {
    return new Promise<KhachHang[]>((resolve, reject) => {
      this.collection.get().subscribe((query) => {
        let dsKhach: KhachHang[] = []

        query.docs.map((doc) => {
          let khach = doc.data() as KhachHang;
          let valid = true;

          if (!khach.Ma.includes(ma)) valid = false;
          if (!khach.SoDienThoai.includes(sdt)) valid = false;
          if (!khach.Ten.includes(ten)) valid = false;
          if (!(khach.GioiTinh == gt)) valid = false;

          if (khach.HienThi && valid)
            dsKhach.push(khach)
        })

        resolve(dsKhach)
      })
    })
  }

  readLive(id: string): Observable<KhachHang> {
    return this.collection.doc<KhachHang>(id)
      .snapshotChanges()
      .pipe(map(
        (doc) => {
          if (doc.payload.exists) {
              const data = doc.payload.data() as KhachHang;
              const payloadMa = doc.payload.id;
              return { Ma: payloadMa, ...data };
          }
        }
      ))
  }

  readAllLive(id: string): Observable<KhachHang[]> {
    return this.collection
      .snapshotChanges()
      .pipe(map(
        (changes) => {
          return changes.map((change) => {
            const data = change.payload.doc.data() as KhachHang;
            data.Ma = change.payload.doc.id;
            return data;
          })
        }
      ))
  }
}
