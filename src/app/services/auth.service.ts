import { map, switchMap } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable, of } from 'rxjs';
import { NhanVien } from '../models/nhan-vien';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user: Observable< NhanVien>;
  private collection: AngularFirestoreCollection<NhanVien>

  constructor(private auth: AngularFireAuth, private database: AngularFirestore) { 
    this.collection = this.database.collection('nhân viên');

    this.user = auth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.collection.ref.where('uid', '==', user.uid)
            .get().then(val => {
              return val.docs[0].data() as NhanVien
            })
        }
        else
          return of(null);
      })
    )
  }

  signIn(email: string, pass: string): Promise<firebase.default.auth.UserCredential> {
    return new Promise<firebase.default.auth.UserCredential>((resolve, reject) => {
      this.auth.signInWithEmailAndPassword(email, pass)
        .then(val => resolve(val))
        .catch(val => reject(val))
    })
  }

  register(email: string, pass: string): Promise<firebase.default.auth.UserCredential> {
    return new Promise((resolve, reject) => {
      this.auth.createUserWithEmailAndPassword(email, pass)
      .then(val => resolve(val))
      .catch(val => reject(val))
    })
  }
  
  signOut(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.auth.signOut().then(() => console.log('Đăng xuất thành công'))
    })
  }

  getUser(): Promise<NhanVien> {
    return new Promise<NhanVien>((resolve, reject) => {
      this.auth.currentUser.then(user => {
        this.collection.ref.where('uid', '==', user.uid)
          .get().then(val => {
            resolve(val.docs[0].data() as NhanVien)
          })
      })
    })
  }
}

export function isQuanLy(nv: NhanVien): boolean {
  return (nv.ChucVu == 'Nhân viên quản lý')
}

export function isLeTan(nv: NhanVien): boolean {
  return (nv.ChucVu == 'Nhân viên lễ tân')
}

export function isThueXe(nv: NhanVien): boolean {
  return (nv.ChucVu == 'Nhân viên thuê xe')
}

export function isThucAn(nv: NhanVien): boolean {
  return (nv.ChucVu == 'Nhân viên thức ăn')
}