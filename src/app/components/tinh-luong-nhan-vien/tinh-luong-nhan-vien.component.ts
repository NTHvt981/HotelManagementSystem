import { Router } from '@angular/router';
import { NhanVien } from './../../models/nhan-vien';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tinh-luong-nhan-vien',
  templateUrl: './tinh-luong-nhan-vien.component.html',
  styleUrls: ['./tinh-luong-nhan-vien.component.css']
})
export class TinhLuongNhanVienComponent implements OnInit {
  nhanVien: NhanVien;
  daTraLuong = false;

  ngayLamViec = 0;
  tienThuong = 0;
  tongTien = 0;

  constructor(private router:Router) { }

  ngOnInit(): void {
    if (history.state.data == undefined)
      this.router.navigateByUrl('/tra-cuu-nhan-vien')

    //this line get the data from url
    this.nhanVien = history.state.data;
  }

  nhapTien($event) {
    this.tongTien = this.ngayLamViec*this.nhanVien.Luong + this.tienThuong;
  }
  
  nhapNgay($event) {
    this.tongTien = this.ngayLamViec*this.nhanVien.Luong + this.tienThuong;
  }

  nhapThuong($event) {
    this.tongTien = this.ngayLamViec*this.nhanVien.Luong + this.tienThuong;
  }
  
  traLuong($event) {

  }

}
