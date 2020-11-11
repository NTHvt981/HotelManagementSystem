import { PhieuThucAn } from './../models/phieu-thuc-an';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { firebaseSerialize } from './common-functions';

@Injectable({
  providedIn: 'root'
})
export class ThucAnService {
  private collection: AngularFirestoreCollection<PhieuThucAn>

  constructor(private firestore: AngularFirestore) {
    this.collection = this.firestore.collection('phiếu dịch vụ')
  }

  create(phieu: PhieuThucAn): Promise<PhieuThucAn> {
    return new Promise<PhieuThucAn>((resolve, reject) => {
      this.collection.doc(phieu.Ma).set(firebaseSerialize(phieu))
        .then(() =>
          resolve(phieu)
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
  readOnce(id: string): Promise<PhieuThucAn> {
    return new Promise<PhieuThucAn>((resolve, reject) => {
      this.collection.doc<PhieuThucAn>(id).get().subscribe((doc) => {
        resolve(doc.data() as PhieuThucAn)
      },
      (error) => console.log(error))
    })
  }

  readAllOnce(): Promise<PhieuThucAn[]> {
    return new Promise<PhieuThucAn[]>((resolve, reject) => {
      this.collection.get().subscribe((query) => {
        let dsKhach: PhieuThucAn[] = []

        query.docs.map((doc) => {
          let phieu = doc.data() as PhieuThucAn;
          if (phieu.HienThi)
            dsKhach.push(phieu)
        })

        resolve(dsKhach)
      })
    })
  }
}
