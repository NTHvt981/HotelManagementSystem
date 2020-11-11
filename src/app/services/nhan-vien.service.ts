import { Observable } from 'rxjs';
import { NhanVien } from './../models/nhan-vien';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { firebaseSerialize } from './common-functions';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NhanVienService {
  private collection: AngularFirestoreCollection<NhanVien>

  constructor(private firestore: AngularFirestore) {
    this.collection = this.firestore.collection('nhân viên')
  }

  create(nhanVien: NhanVien): Promise<NhanVien> {
    return new Promise<NhanVien>((resolve, reject) => {
      this.collection.doc(nhanVien.Ma).set(firebaseSerialize(nhanVien))
        .then(() =>
          resolve(nhanVien)
        )
        .catch((err) => 
          reject(err as string)
        )
    })
  }

  update(nhanVien: NhanVien): Promise<NhanVien> {
    return new Promise<NhanVien>((resolve, reject) => {
      this.collection.doc(nhanVien.Ma).update(firebaseSerialize(nhanVien))
        .then(() =>
          resolve(nhanVien)
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
          resolve('xóa nhân viên succeed')
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
      .then(() => resolve('delete nhân viên succeed'))
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
  readOnce(id: string): Promise<NhanVien> {
    return new Promise<NhanVien>((resolve, reject) => {
      this.collection.doc<NhanVien>(id).get().subscribe((doc) => {
        resolve(doc.data() as NhanVien)
      },
      (error) => resolve(error))
    })
  }

  readAllOnce(): Promise<NhanVien[]> {
    return new Promise<NhanVien[]>((resolve, reject) => {
      this.collection.get().subscribe((query) => {
        let dsnhanVien: NhanVien[] = []

        query.docs.map((doc) => {
          let nhanVien = doc.data() as NhanVien;
          if (nhanVien.HienThi)
            dsnhanVien.push(nhanVien)
        })

        resolve(dsnhanVien)
      })
    })
  }

  readAllOnceBy(
    ma: string,
    ten: string,
    gt: string,
    sdt: string
    ): Promise<NhanVien[]> {
    return new Promise<NhanVien[]>((resolve, reject) => {
      this.collection.get().subscribe((query) => {
        let dsnhanVien: NhanVien[] = []

        query.docs.map((doc) => {
          let nhanVien = doc.data() as NhanVien;
          let valid = true;

          if (!nhanVien.Ma.includes(ma)) valid = false;
          if (!nhanVien.Ten.includes(ten)) valid = false;
          if (!nhanVien.SoDienThoai.includes(sdt)) valid = false;
          if (nhanVien.GioiTinh != gt) valid = false;

          if (nhanVien.HienThi && valid)
            dsnhanVien.push(nhanVien)
        })

        resolve(dsnhanVien)
      })
    })
  }

  readLive(id: string): Observable<NhanVien> {
    return this.collection.doc<NhanVien>(id)
      .snapshotChanges()
      .pipe(map(
        (doc) => {
          if (doc.payload.exists) {
              const data = doc.payload.data() as NhanVien;
              const payloadMa = doc.payload.id;
              return { Ma: payloadMa, ...data };
          }
        }
      ))
  }

  readAllLive(id: string): Observable<NhanVien[]> {
    return this.collection
      .snapshotChanges()
      .pipe(map(
        (changes) => {
          return changes.map((change) => {
            const data = change.payload.doc.data() as NhanVien;
            data.Ma = change.payload.doc.id;
            return data;
          })
        }
      ))
  }
}
