import { PhongService } from './../../services/phong.service';
import { ImageService } from './../../services/image.service';
import { LoaiPhongOptions, Phong, TinhTrangOptions } from './../../models/phong';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chi-tiet-phong',
  templateUrl: './chi-tiet-phong.component.html',
  styleUrls: ['./chi-tiet-phong.component.css']
})
export class ChiTietPhongComponent implements OnInit {
  editable = false;

  phong: Phong;
  tinhTrangOptions = TinhTrangOptions;
  loaiOptions = LoaiPhongOptions;

  constructor(
    private router:Router, 
    private database: PhongService, 
    private imgStorage: ImageService
    ) { }

  ngOnInit(): void {
    if (history.state.data == undefined)
      this.router.navigateByUrl('/tra-cuu-phong')
      
    //this line get the data from url
    this.phong = history.state.data;
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

  chinhSua($event) {
    this.database.update(this.phong).then((value) => console.log(value));
  }
  
  xoa($event) {

  }
}
