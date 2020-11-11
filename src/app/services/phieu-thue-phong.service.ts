import { Observable } from 'rxjs';
import { PhieuThuePhong } from './../models/phieu-thue-phong';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { firebaseSerialize } from './common-functions';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PhieuThuePhongService {
  private collection: AngularFirestoreCollection<PhieuThuePhong>

  constructor(private firestore: AngularFirestore) {
    this.collection = this.firestore.collection('phiếu thuê phòng')
  }

  create(phieuThue: PhieuThuePhong): Promise<PhieuThuePhong> {
    return new Promise<PhieuThuePhong>((resolve, reject) => {
      this.collection.doc(phieuThue.Ma).set(firebaseSerialize(phieuThue))
        .then(() =>
          resolve(phieuThue)
        )
        .catch((err) => 
          reject(err as string)
        )
    })
  }

  erase(id: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      this.collection.doc(id).update({
        HienThi: false
      })
        .then(() =>
          resolve('xóa phiếu thuê phòng succeed')
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
  readOnce(id: string): Promise<PhieuThuePhong> {
    return new Promise<PhieuThuePhong>((resolve, reject) => {
      this.collection.doc<PhieuThuePhong>(id).get().subscribe((doc) => {
        resolve(doc.data() as PhieuThuePhong)
      },
      (error) => resolve(error))
    })
  }

  readAllOnce(): Promise<PhieuThuePhong[]> {
    return new Promise<PhieuThuePhong[]>((resolve, reject) => {
      this.collection.get().subscribe((query) => {
        let dsphieuThue: PhieuThuePhong[] = []

        query.docs.map((doc) => {
          let phieuThue = doc.data() as PhieuThuePhong;
          if (phieuThue.HienThi)
            dsphieuThue.push(phieuThue)
        })

        resolve(dsphieuThue)
      })
    })
  }

  readAllOnceBy(
    ma: string,
    tgThue: Date,
    tgTra: Date,
    maK: string,
    maP: string,
    maLT: string,
    tinhTrang: string,
    ngayThue: number,
    gioThue: number
    ): Promise<PhieuThuePhong[]> {
    return new Promise<PhieuThuePhong[]>((resolve, reject) => {
      this.collection.get().subscribe((query) => {
        let dsphieuThue: PhieuThuePhong[] = []

        query.docs.map((doc) => {
          let phieuThue = doc.data() as PhieuThuePhong;
          let valid = true;

          if (!phieuThue.Ma.includes(ma)) valid = false;
          if (!phieuThue.MaKhach.includes(maK)) valid = false;
          if (!phieuThue.MaPhong.includes(maP)) valid = false;
          if (!phieuThue.MaLeTan.includes(maLT)) valid = false;

          if (phieuThue.TinhTrang != tinhTrang) valid = false;
          if (phieuThue.NgayThue != ngayThue) valid = false;
          if (phieuThue.GioThue != gioThue) valid = false;

          if (phieuThue.ThoiGianThue != tgThue) valid = false;
          if (phieuThue.ThoiGianTra != tgTra) valid = false;

          if (phieuThue.HienThi && valid)
            dsphieuThue.push(phieuThue)
        })

        resolve(dsphieuThue)
      })
    })
  }

  readLive(id: string): Observable<PhieuThuePhong> {
    return this.collection.doc<PhieuThuePhong>(id)
      .snapshotChanges()
      .pipe(map(
        (doc) => {
          if (doc.payload.exists) {
              const data = doc.payload.data() as PhieuThuePhong;
              const payloadMa = doc.payload.id;
              return { Ma: payloadMa, ...data };
          }
        }
      ))
  }

  readAllLive(id: string): Observable<PhieuThuePhong[]> {
    return this.collection
      .snapshotChanges()
      .pipe(map(
        (changes) => {
          return changes.map((change) => {
            const data = change.payload.doc.data() as PhieuThuePhong;
            data.Ma = change.payload.doc.id;
            return data;
          })
        }
      ))
  }
}
