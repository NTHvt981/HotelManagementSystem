import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { HoaDon } from '../models/hoa-don';
import { firebaseSerialize } from './common-functions';

@Injectable({
  providedIn: 'root'
})
export class HoaDonService {
  private collection: AngularFirestoreCollection<HoaDon>

  constructor(private firestore: AngularFirestore) {
    this.collection = this.firestore.collection('hóa đơn')
  }

  create(hoaDon: HoaDon): Promise<HoaDon> {
    return new Promise<HoaDon>((resolve, reject) => {
      this.collection.doc(hoaDon.Ma).set(firebaseSerialize(hoaDon))
        .then(() =>
          resolve(hoaDon)
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
          resolve('erase phiếu thuê xe')
        )
        .catch((reason) => 
          reject(reason as string)
        )
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
  readOnce(id: string): Promise<HoaDon> {
    return new Promise<HoaDon>((resolve, reject) => {
      this.collection.doc<HoaDon>(id).get().subscribe((doc) => {
        resolve(doc.data() as HoaDon)
      },
      (error) => console.log(error))
    })
  }

  readAllOnce(): Promise<HoaDon[]> {
    return new Promise<HoaDon[]>((resolve, reject) => {
      this.collection.get().subscribe((query) => {
        let dsPhieu: HoaDon[] = []

        query.docs.map((doc) => {
          let phieu = doc.data() as HoaDon;
          dsPhieu.push(phieu)
        })

        resolve(dsPhieu)
      })
    })
  }

  readAllOnceBy(
    maThuePhong: string
  ): Promise<HoaDon[]> {
    return new Promise<HoaDon[]>((resolve, reject) => {
      this.collection.ref.where('MaThuePhong', '==', maThuePhong).get().then((query) => {
        let dsPhieu: HoaDon[] = []

        query.docs.map((doc) => {
          let phieu = doc.data() as HoaDon;

          dsPhieu.push(phieu)
        })

        resolve(dsPhieu)
      })
    })
  }
}
