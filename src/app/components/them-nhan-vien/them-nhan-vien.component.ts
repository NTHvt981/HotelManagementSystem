import { ImageService } from './../../services/image.service';
import { NhanVienService } from './../../services/nhan-vien.service';
import { NhanVien } from './../../models/nhan-vien';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-them-nhan-vien',
  templateUrl: './them-nhan-vien.component.html',
  styleUrls: ['./them-nhan-vien.component.css']
})
export class ThemNhanVienComponent implements OnInit {
  nhanVien: NhanVien = new NhanVien();

  constructor(private database: NhanVienService, private imgStorage: ImageService) { }

  ngOnInit(): void {
  }

  onImageUpload($event) {
    // console.log($event)
    this.imgStorage.uploadImage('nhân viên', $event.files[0])
      .downloadUrl$.then((value) => {
        console.log('upload complete!')
        console.log(value)

        /**
         * set image view
         */
        this.imgStorage.getImageUrl(value).subscribe((next) => {
          this.nhanVien.HinhAnh = next;
        })
      })
  }

  themNhanVien($event) {
    this.database.create(this.nhanVien).then((value) => console.log(value))
  }
}
