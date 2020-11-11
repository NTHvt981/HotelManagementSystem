import { ImageService } from './../../services/image.service';
import { NhanVienService } from './../../services/nhan-vien.service';
import { NhanVien } from './../../models/nhan-vien';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-chi-tiet-nhan-vien',
  templateUrl: './chi-tiet-nhan-vien.component.html',
  styleUrls: ['./chi-tiet-nhan-vien.component.css']
})
export class ChiTietNhanVienComponent implements OnInit {
  nhanVien: NhanVien;
  editable: boolean = false;

  constructor(private router:Router, 
    private database:NhanVienService,
    private storage:ImageService) { }

  ngOnInit(): void {
    if (history.state.data == undefined)
      this.router.navigateByUrl('/tra-cuu-nhan-vien')

    //this line get the data from url
    this.nhanVien = history.state.data;
  }

  onImageUpload($event) {
    this.storage.uploadImage('nhân viên', $event.files[0])
      .downloadUrl$.then((value) => {
        console.log('upload complete!')
        console.log(value)

        /**
         * set image view
         */
        this.storage.getImageUrl(value).subscribe((next) => {
          this.nhanVien.HinhAnh = next;
        })
      })
  }

  chinhSua($event) {
    this.database.update(this.nhanVien)
      .then((val) => console.log(val));
  }
  
  xoa($event) {

  }
}
