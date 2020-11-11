import { ImageService } from './../../services/image.service';
import { FirestoreCrudService } from './../../services/firestore-crud.service';
import { KhachHangService } from './../../services/khach-hang.service';
import { KhachHang } from './../../models/khach-hang';
import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-them-khach',
  templateUrl: './them-khach.component.html',
  styleUrls: ['./them-khach.component.css']
})
export class ThemKhachComponent implements OnInit {
  khachHang: KhachHang = new KhachHang();
  imgSrc: string = "https://financemd.files.wordpress.com/2015/08/facebook-default-no-profile-pic.jpg";

  constructor(private database: KhachHangService, private imgStorage: ImageService) { }

  ngOnInit(): void {
    console.log(this.khachHang);
  }

  onImageUpload($event) {
    // console.log($event)
    this.imgStorage.uploadImage('khách hàng', $event.files[0])
      .downloadUrl$.then((value) => {
        console.log('upload complete!')
        console.log(value)

        /**
         * set image view
         */
        this.imgStorage.getImageUrl(value).subscribe((next) => {
          this.khachHang.HinhAnh = next;
        })
      })
  }

  them($event) {
    this.database.create(this.khachHang).then((value) => console.log(value))
    // console.log(this.khachHang);
  }
}
