import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface FilesUploadMetadata {
  uploadProgress$: Observable<number>;
  downloadUrl$: Promise<string>;
}

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private storage: AngularFireStorage) { 
    
  }
  
  uploadImage(
    folder: string,
    file: File
  ): FilesUploadMetadata {
    const { name } = file;
    const filePath = `${folder}/${new Date().getTime()}_${name}`
    const uploadTask: AngularFireUploadTask = this.storage.upload(
      filePath,
      file
    );

    return {
      uploadProgress$: uploadTask.percentageChanges(),
      downloadUrl$: this.getDownloadUrl$(uploadTask, filePath)
    }
  }

  getImageUrl(path: string): Observable<string> {
    return this.storage.ref(path).getDownloadURL().pipe(map((value) => (value as string)))
  }
  
  private getDownloadUrl$(
    uploadTask: AngularFireUploadTask,
    path: string,
  ): Promise<string> {
    // return from(uploadTask).pipe(
    //   switchMap((_) => this.storage.ref(path).getDownloadURL()),
    // );

    return new Promise<string>((resolve, reject) => {
      uploadTask.then(
        (snapshot) => {
          resolve(path);
          console.log('snapshot: ', snapshot);
        },
        (err) => {
          reject(err.message);
        })
      })
  }
}
