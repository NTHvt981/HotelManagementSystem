import { ImageService } from './../../services/image.service';
import { PhongService } from './../../services/phong.service';
import { LoaiPhongOptions, Phong, TinhTrangOptions } from './../../models/phong';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-them-phong',
  templateUrl: './them-phong.component.html',
  styleUrls: ['./them-phong.component.css']
})
export class ThemPhongComponent implements OnInit {
  phong: Phong = new Phong();
  tinhTrangOptions = TinhTrangOptions;
  loaiOptions = LoaiPhongOptions;

  constructor(private database: PhongService, private imgStorage: ImageService) { }

  ngOnInit(): void {
  }

  onImageUpload($event) {
    this.imgStorage.uploadImage('phòng', $event.files[0])
      .downloadUrl$.then((value) => {
        console.log('upload complete!')
        console.log(value)

        /**
         * set image view
         */
        this.imgStorage.getImageUrl(value).subscribe((next) => {
          this.phong.HinhAnh = next;
        })
      })
  }

  them($event) {
    this.database.create(this.phong).then((value) => console.log(value));
  }
}
