import { PhieuTinhLuong } from './../models/phieu-tinh-luong';
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
  private luongCollection: AngularFirestoreCollection<PhieuTinhLuong>

  constructor(private firestore: AngularFirestore) {
    this.collection = this.firestore.collection('nhân viên');
    this.luongCollection = this.firestore.collection('phiếu tính lương');
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

  asignUid(id: string, _uid: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      this.collection.doc(id).update({
        uid: _uid
      })
      .then(() =>
        resolve('gán uid thành công')
      )
      .catch((reason) => 
        reject(reason as string)
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

  createPhieuTinhLuong(phieu: PhieuTinhLuong): Promise<PhieuTinhLuong> {
    return new Promise<PhieuTinhLuong>((resolve, reject)=>{
      this.luongCollection.doc(phieu.Ma).set(firebaseSerialize(phieu))
      .then(() => resolve(phieu))
      .catch((reason) => reject(reason))
    })
  }

  getNgayTraLuongGanNhat(id: string): Promise<PhieuTinhLuong> {
    return new Promise<PhieuTinhLuong>((resolve, reject)=>{
      this.luongCollection.ref
      .where('MaNhanVien', '==', id)
      .orderBy('NgayTraLuong', 'desc')
      .limit(1)
      .get().then(val => {
        resolve(val.docs[0].data() as PhieuTinhLuong)
      })
      .catch((reason) => reject(reason))
    })
  }
}
