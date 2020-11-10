import { ImageService } from './../../services/image.service';
import { KhachHangService } from './../../services/khach-hang.service';
import { KhachHang } from './../../models/khach-hang';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-chi-tiet-khach',
  templateUrl: './chi-tiet-khach.component.html',
  styleUrls: ['./chi-tiet-khach.component.css']
})
export class ChiTietKhachComponent implements OnInit {
  khachHang: KhachHang;
  editable: boolean = false;

  tinhTrangOptions: SelectItem[] = [
    {label: 'Không thuê', value:'Không thuê'},
    {label: 'Đang thuê', value:'Đang thuê'},
  ]

  constructor(private router:Router, 
    private service: KhachHangService, 
    private storage: ImageService) { }

  ngOnInit(): void {
    if (history.state.data == undefined)
      this.router.navigateByUrl('/tra-cuu-khach')
      
    //this line get the data from url
    this.khachHang = history.state.data;
  }

  onImageUpload($event) {
    // console.log($event)
    this.storage.uploadImage('khách hàng', $event.files[0])
      .downloadUrl$.then((value) => {
        console.log('upload complete!')
        console.log(value)

        /**
         * set image view
         */
        this.storage.getImageUrl(value).subscribe((next) => {
          this.khachHang.HinhAnh = next;
        })
      })
  }

  chinhSua($event) {
    this.service.update(this.khachHang).then((value) => console.log(value))
  }
  
  xoa($event) {
    this.service.delete(this.khachHang.Ma).then((value) => console.log(value))
  }
}
