import { Xe } from './../models/xe';
import { PhieuThueXe } from './../models/phieu-thue-xe';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { firebaseSerialize } from './common-functions';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { KhachHang } from '../models/khach-hang';
import { PhieuThuePhong } from '../models/phieu-thue-phong';

@Injectable({
  providedIn: 'root'
})
export class ThueXeService {
  private collection: AngularFirestoreCollection<PhieuThueXe>

  constructor(private firestore: AngularFirestore) {
    this.collection = this.firestore.collection('phiếu dịch vụ')
  }

  create(phieu: PhieuThueXe): Promise<PhieuThueXe> {
    return new Promise<PhieuThueXe>((resolve, reject) => {
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
  readOnce(id: string): Promise<PhieuThueXe> {
    return new Promise<PhieuThueXe>((resolve, reject) => {
      this.collection.doc<PhieuThueXe>(id).get().subscribe((doc) => {
        resolve(doc.data() as PhieuThueXe)
      },
      (error) => console.log(error))
    })
  }

  readAllOnce(): Promise<PhieuThueXe[]> {
    return new Promise<PhieuThueXe[]>((resolve, reject) => {
      this.collection.get().subscribe((query) => {
        let dsKhach: PhieuThueXe[] = []

        query.docs.map((doc) => {
          let phieu = doc.data() as PhieuThueXe;
          if (phieu.HienThi)
            dsKhach.push(phieu)
        })

        resolve(dsKhach)
      })
    })
  }
}
