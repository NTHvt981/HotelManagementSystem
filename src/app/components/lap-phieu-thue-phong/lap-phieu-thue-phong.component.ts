import { PhieuThuePhongService } from './../../services/phieu-thue-phong.service';
import { NhanVienService } from './../../services/nhan-vien.service';
import { PhongService } from './../../services/phong.service';
import { KhachHangService } from './../../services/khach-hang.service';
import { Router } from '@angular/router';
import { NhanVien } from './../../models/nhan-vien';
import { KhachHang } from './../../models/khach-hang';
import { LoaiPhongOptions, Phong } from './../../models/phong';
import { Component, OnInit } from '@angular/core';
import { PhieuThuePhong } from 'src/app/models/phieu-thue-phong';

@Component({
  selector: 'app-lap-phieu-thue-phong',
  templateUrl: './lap-phieu-thue-phong.component.html',
  styleUrls: ['./lap-phieu-thue-phong.component.css']
})
export class LapPhieuThuePhongComponent implements OnInit {
  khachHang: KhachHang = new KhachHang();
  phong: Phong = new Phong();
  nhanVien: NhanVien = new NhanVien();
  phieuThue: PhieuThuePhong = new PhieuThuePhong();

  loaiOptions = LoaiPhongOptions;

  thoiGianThue: Date = new Date();
  thoiGianTra: Date = new Date();
  gioThue: number = 0;
  ngayThue: number = 0;

  constructor(
    private router:Router,
    private khachS: KhachHangService,
    private phongS: PhongService,
    private nhanVienS: NhanVienService,
    private thueS: PhieuThuePhongService
    ) {
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
    this.nhanVienS.readOnce('NV160-505-900-1131')
      .then((nv) => this.nhanVien = nv)
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
    this.phieuThue.ThoiGianThue = this.thoiGianThue;
    this.phieuThue.ThoiGianTra = this.thoiGianTra;
    this.phieuThue.GioThue = this.gioThue;
    this.phieuThue.NgayThue = this.ngayThue;

    this.phieuThue.MaKhach = this.khachHang.Ma;
    this.phieuThue.MaPhong = this.phong.Ma;
    this.phieuThue.MaLeTan = this.nhanVien.Ma;

    this.thueS.create(this.phieuThue);
    this.khachS.setTrangThai(this.khachHang.Ma, 'Đang thuê');
    this.phongS.setTrangThai(this.phong.Ma, 'Đang thuê');
  }
}