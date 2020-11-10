import { Injectable } from '@angular/core';
import { firebaseSerialize } from "./common-functions";
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators'

/**
 * turn JS object to object
 */


export interface Entity {
  Ma: string;
}

@Injectable({
  providedIn: 'root'
})
export class FirestoreCrudService<T extends Entity> {
  private collection: AngularFirestoreCollection<T>

  constructor(private afs: AngularFirestore, collectionName: string) {
    this.collection = this.afs.collection(collectionName);
  }

  getNewId(): string {
    return 'KH' + (new Date()).valueOf().toString().substr(6);
  }
  
  add(entity: T, Ma?: string): Promise<T> {
  // We want to create a Typed Return of the added Entity
  return new Promise<T>((resolve, reject) => {
      if(Ma) {
          // If there is an Ma ProvMaed, lets specifically set the Document
          this.collection
          .doc(Ma)
          .set(firebaseSerialize(entity))
          .then(ref => {
              resolve(entity);
          });
      } else {
          // If no Ma is set, allow Firestore to Auto-Generate one
          this.collection.add(firebaseSerialize(entity)).then(ref => {
              // Let's make sure we return the newly added Ma with Model
              const newentity = {
                Ma: ref.id,
                  ...entity
              };
              resolve(newentity);
          })
      }
    })
  }

  // Our get method will fetch a single Entity by it's Document Ma
  get(Ma: string): Observable<T> {
    return this.collection
      .doc<T>(Ma)
      .snapshotChanges()
      .pipe(
          // We want to map the document into a Typed JS Object
          map(doc => {
              // Only if the entity exists should we build an object out of it
              if (doc.payload.exists) {
                  const data = doc.payload.data() as T;
                  const payloadMa = doc.payload.id;
                  return { Ma: payloadMa, ...data };
              }
          })
      );
  }

// Our list method will get all the Entities in the Collection
  list(): Observable<T[]> {
    return this.collection.snapshotChanges().pipe(
      // Again we want to build a Typed JS Object from the Document
      map(changes => {
          return changes.map(a => {
              const data = a.payload.doc.data() as T;
              data.Ma = a.payload.doc.id;
              return data;
          });
      })
    );
  }

  update(entity: T): Promise<T> {
    return new Promise<T>((resolve, reject) => {
        this.collection
            .doc<T>(entity.Ma as string)
            .set(firebaseSerialize(entity))
            .then(() => {
                resolve({
                    ...entity
                });
            });
    });
  }

  delete(id: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
        this.collection
            .doc<T>(id)
            .delete()
            .then(() => {
                resolve();
            });
    });
  }
}
