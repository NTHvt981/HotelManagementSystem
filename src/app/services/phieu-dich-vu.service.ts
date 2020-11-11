import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { PhieuDichVu } from '../models/phieu-dich-vu';
import { firebaseSerialize } from './common-functions';

@Injectable({
  providedIn: 'root'
})
export class PhieuDichVuService {
  private collection: AngularFirestoreCollection<PhieuDichVu>

  constructor(private firestore: AngularFirestore) {
    this.collection = this.firestore.collection('phiếu dịch vụ')
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
  readOnce(id: string): Promise<PhieuDichVu> {
    return new Promise<PhieuDichVu>((resolve, reject) => {
      this.collection.doc<PhieuDichVu>(id).get().subscribe((doc) => {
        resolve(doc.data() as PhieuDichVu)
      },
      (error) => console.log(error))
    })
  }

  readAllOnce(): Promise<PhieuDichVu[]> {
    return new Promise<PhieuDichVu[]>((resolve, reject) => {
      this.collection.get().subscribe((query) => {
        let dsPhieu: PhieuDichVu[] = []

        query.docs.map((doc) => {
          let phieu = doc.data() as PhieuDichVu;
          if (phieu.HienThi)
            dsPhieu.push(phieu)
        })

        resolve(dsPhieu)
      })
    })
  }

  readAllOnceBy(
    maThuePhong: string
  ): Promise<PhieuDichVu[]> {
    return new Promise<PhieuDichVu[]>((resolve, reject) => {
      this.collection.ref.where('MaThuePhong', '==', maThuePhong).get().then((query) => {
        let dsPhieu: PhieuDichVu[] = []

        query.docs.map((doc) => {
          let phieu = doc.data() as PhieuDichVu;
          let valid = true;

          if (phieu.HienThi && valid)
            dsPhieu.push(phieu)
        })

        resolve(dsPhieu)
      })
    })
  }
}
