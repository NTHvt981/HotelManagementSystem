import { Router } from '@angular/router';
import { NhanVien } from './../../models/nhan-vien';
import { KhachHang } from './../../models/khach-hang';
import { LoaiPhongOptions, Phong } from './../../models/phong';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lap-phieu-thue-phong',
  templateUrl: './lap-phieu-thue-phong.component.html',
  styleUrls: ['./lap-phieu-thue-phong.component.css']
})
export class LapPhieuThuePhongComponent implements OnInit {
  khachHang: KhachHang = new KhachHang();
  phong: Phong = new Phong();
  nhanVien: NhanVien = new NhanVien();

  loaiOptions = LoaiPhongOptions;

  thoiGianThue: Date = new Date();
  thoiGianTra: Date = new Date();
  gioThue: number = 0;
  ngayThue: number = 0;

  constructor(private router:Router) {

  }

  ngOnInit(): void {
    // if (history.state.data == undefined)
    //   this.router.navigateByUrl('/tra-cuu-khach')
      
    //this line get the data from url
    this.khachHang = history.state.data.khachHang;
    this.phong = history.state.data.phong;
    // this.nhanVien = history.state.data.nhanVien;

    /**
     * for debug
     */
    this.nhanVien = new NhanVien({
      Ma: '1000',
      Ten: 'Trần Thị B',
      GioiTinh: 'Nữ',
      ChucVu: 'Nhân viên quản lý',
      Luong: 18_000_000,
      SoDienThoai: '123-4560-789'
    })


    console.log(this.khachHang)
    console.log(this.phong)
  }

  setNgayTra($event) {
    this.ngayThue = this.thoiGianTra.getDate() - this.thoiGianThue.getDate();

    if (this.ngayThue == 0)
      this.gioThue = this.thoiGianTra.getHours() - this.thoiGianThue.getHours();
    else
      this.gioThue = 0;

    console.log("add days ", this.ngayThue)
  }

  xacNhanThue($event) {
    this.gioThue += 1
    this.ngayThue += 1
  }
}