import { Observable } from 'rxjs';
import { Phong } from './../models/phong';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { firebaseSerialize } from './common-functions';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PhongService {
  private collection: AngularFirestoreCollection<Phong>

  constructor(private firestore: AngularFirestore) {
    this.collection = this.firestore.collection('phòng')
  }

  create(phong: Phong): Promise<Phong> {
    return new Promise<Phong>((resolve, reject) => {
      this.collection.doc(phong.Ma).set(firebaseSerialize(phong))
        .then(() =>
          resolve(phong)
        )
        .catch((err) => 
          reject(err as string)
        )
    })
  }

  update(phong: Phong): Promise<Phong> {
    return new Promise<Phong>((resolve, reject) => {
      this.collection.doc(phong.Ma).update(firebaseSerialize(phong))
        .then(() =>
          resolve(phong)
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
          resolve('xóa phòng succeed')
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
  
  setTrangThai(id: string, newState: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      this.collection.doc(id).update({
        TinhTrang: newState
      })
        .then(() =>
          resolve(newState)
        )
        .catch((reason) => 
          reject(reason as string)
        )
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
  readOnce(id: string): Promise<Phong> {
    return new Promise<Phong>((resolve, reject) => {
      this.collection.doc<Phong>(id).get().subscribe((doc) => {
        resolve(doc.data() as Phong)
      },
      (error) => reject(error))
    })
  }

  readAllOnce(): Promise<Phong[]> {
    return new Promise<Phong[]>((resolve, reject) => {
      this.collection.get().subscribe((query) => {
        let dsphong: Phong[] = []

        query.docs.map((doc) => {
          let phong = doc.data() as Phong;
          if (phong.HienThi)
            dsphong.push(phong)
        })

        resolve(dsphong)
      })
    })
  }

  readAllOnceBy(
    ma: string, soPhong: string,
    soTang: number, soGiuong: number,
    giaGio: number, giaNgay: number,
    loaiPhong: string, tinhTrang: string
    ): Promise<Phong[]> {
    return new Promise<Phong[]>((resolve, reject) => {
      this.collection.get().subscribe((query) => {
        let dsphong: Phong[] = []

        query.docs.map((doc) => {
          let phong = doc.data() as Phong;
          let valid = true;

          if (!phong.Ma.includes(ma)) valid = false;
          if (!phong.SoPhong.includes(soPhong)) valid = false;
          if (phong.SoGiuong != soGiuong) valid = false;
          if (phong.SoTang != soTang) valid = false;
          if (phong.GiaTheoGio != giaGio) valid = false;
          if (phong.GiaTheoNgay != giaNgay) valid = false;
          if (phong.LoaiPhong != loaiPhong) valid = false;
          if (phong.TinhTrang != tinhTrang) valid = false;

          if (phong.HienThi && valid)
            dsphong.push(phong)
        })

        resolve(dsphong)
      })
    })
  }

  readLive(id: string): Observable<Phong> {
    return this.collection.doc<Phong>(id)
      .snapshotChanges()
      .pipe(map(
        (doc) => {
          if (doc.payload.exists) {
              const data = doc.payload.data() as Phong;
              const payloadMa = doc.payload.id;
              return { Ma: payloadMa, ...data };
          }
        }
      ))
  }

  readAllLive(id: string): Observable<Phong[]> {
    return this.collection
      .snapshotChanges()
      .pipe(map(
        (changes) => {
          return changes.map((change) => {
            const data = change.payload.doc.data() as Phong;
            data.Ma = change.payload.doc.id;
            return data;
          })
        }
      ))
  }
}
