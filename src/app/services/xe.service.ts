import { Xe } from './../models/xe';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { firebaseSerialize } from './common-functions';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class XeService {
  private collection: AngularFirestoreCollection<Xe>

  constructor(private firestore: AngularFirestore) {
    this.collection = this.firestore.collection('xe')
  }

  create(xe: Xe): Promise<Xe> {
    return new Promise<Xe>((resolve, reject) => {
      this.collection.doc(xe.Ma).set(firebaseSerialize(xe))
        .then(() =>
          resolve(xe)
        )
        .catch((reason) => 
          reject(reason as string)
        )
    })
  }

  update(xe: Xe): Promise<Xe> {
    return new Promise<Xe>((resolve, reject) => {
      this.collection.doc(xe.Ma).update(firebaseSerialize(xe))
        .then(() =>
          resolve(xe)
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
  readOnce(id: string): Promise<Xe> {
    return new Promise<Xe>((resolve, reject) => {
      this.collection.doc<Xe>(id).get().subscribe((doc) => {
        resolve(doc.data() as Xe)
      },
      (error) => console.log(error))
    })
  }

  readAllOnce(): Promise<Xe[]> {
    return new Promise<Xe[]>((resolve, reject) => {
      this.collection.get().subscribe((query) => {
        let dsKhach: Xe[] = []

        query.docs.map((doc) => {
          let xe = doc.data() as Xe;
          if (xe.HienThi)
            dsKhach.push(xe)
        })

        resolve(dsKhach)
      })
    })
  }

  readAllOnceBy(
    ma: string, ten: string, 
    giaH: number, giaN: number,
    tinhTrang: string  
  ): Promise<Xe[]> {
    return new Promise<Xe[]>((resolve, reject) => {
      this.collection.get().subscribe((query) => {
        let dsKhach: Xe[] = []

        query.docs.map((doc) => {
          let xe = doc.data() as Xe;
          let valid = true;

          if (!xe.Ma.includes(ma)) valid = false;
          if (!xe.Ten.includes(ten)) valid = false;
          if (!(xe.GiaTheoGio == giaH)) valid = false;
          if (!(xe.GiaTheoNgay == giaN)) valid = false;
          if (!(xe.TinhTrang == tinhTrang)) valid = false;

          if (xe.HienThi && valid)
            dsKhach.push(xe)
        })

        resolve(dsKhach)
      })
    })
  }

  readLive(id: string): Observable<Xe> {
    return this.collection.doc<Xe>(id)
      .snapshotChanges()
      .pipe(map(
        (doc) => {
          if (doc.payload.exists) {
              const data = doc.payload.data() as Xe;
              const payloadMa = doc.payload.id;
              return { Ma: payloadMa, ...data };
          }
        }
      ))
  }

  readAllLive(id: string): Observable<Xe[]> {
    return this.collection
      .snapshotChanges()
      .pipe(map(
        (changes) => {
          return changes.map((change) => {
            const data = change.payload.doc.data() as Xe;
            data.Ma = change.payload.doc.id;
            return data;
          })
        }
      ))
  }
}
