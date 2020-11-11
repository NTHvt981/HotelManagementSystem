import { Observable } from 'rxjs';
import { MonAn } from './../models/mon-an';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { firebaseSerialize } from './common-functions';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MonAnService {
  private collection: AngularFirestoreCollection<MonAn>

  constructor(private firestore: AngularFirestore) {
    this.collection = this.firestore.collection('món ăn')
  }

  create(monAn: MonAn): Promise<MonAn> {
    return new Promise<MonAn>((resolve, reject) => {
      this.collection.doc(monAn.Ma).set(firebaseSerialize(monAn))
        .then(() =>
          resolve(monAn)
        )
        .catch((reason) => 
          reject(reason as string)
        )
    })
  }

  update(monAn: MonAn): Promise<MonAn> {
    return new Promise<MonAn>((resolve, reject) => {
      this.collection.doc(monAn.Ma).update(firebaseSerialize(monAn))
        .then(() =>
          resolve(monAn)
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

  /**
   * read data section
   * devide into 4 part
   * read single once
   * read single live change
   * read list once
   * read list live change
   */
  readOnce(id: string): Promise<MonAn> {
    return new Promise<MonAn>((resolve, reject) => {
      this.collection.doc<MonAn>(id).get().subscribe((doc) => {
        resolve(doc.data() as MonAn)
      },
      (error) => console.log(error))
    })
  }

  readAllOnce(): Promise<MonAn[]> {
    return new Promise<MonAn[]>((resolve, reject) => {
      this.collection.get().subscribe((query) => {
        let dsKhach: MonAn[] = []

        query.docs.map((doc) => {
          let monAn = doc.data() as MonAn;
          if (monAn.HienThi)
            dsKhach.push(monAn)
        })

        resolve(dsKhach)
      })
    })
  }

  readAllOnceBy(
    ma: string, 
    ten: string, 
    gia: number
    ): Promise<MonAn[]> {
    return new Promise<MonAn[]>((resolve, reject) => {
      this.collection.get().subscribe((query) => {
        let dsKhach: MonAn[] = []

        query.docs.map((doc) => {
          let monAn = doc.data() as MonAn;
          let valid = true;

          if (!monAn.Ma.includes(ma)) valid = false;
          if (!monAn.Ten.includes(ten)) valid = false;
          if (!(monAn.Gia == gia)) valid = false;

          if (monAn.HienThi && valid)
            dsKhach.push(monAn)
        })

        resolve(dsKhach)
      })
    })
  }

  readLive(id: string): Observable<MonAn> {
    return this.collection.doc<MonAn>(id)
      .snapshotChanges()
      .pipe(map(
        (doc) => {
          if (doc.payload.exists) {
              const data = doc.payload.data() as MonAn;
              const payloadMa = doc.payload.id;
              return { Ma: payloadMa, ...data };
          }
        }
      ))
  }

  readAllLive(id: string): Observable<MonAn[]> {
    return this.collection
      .snapshotChanges()
      .pipe(map(
        (changes) => {
          return changes.map((change) => {
            const data = change.payload.doc.data() as MonAn;
            data.Ma = change.payload.doc.id;
            return data;
          })
        }
      ))
  }
}
