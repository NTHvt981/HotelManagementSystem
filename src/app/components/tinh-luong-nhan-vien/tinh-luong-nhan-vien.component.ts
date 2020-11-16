import { PhieuTinhLuong } from './../../models/phieu-tinh-luong';
import { NhanVienService } from './../../services/nhan-vien.service';
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
  phieu = new PhieuTinhLuong();
  daTraLuong = false;

  ngayLamViec = 0;
  tienThuong = 0;
  tongTien = 0;

  constructor(private router:Router, private database: NhanVienService) { }

  ngOnInit(): void {
    if (history.state.data == undefined)
      this.router.navigateByUrl('/tra-cuu-nhan-vien')

    //this line get the data from url
    this.nhanVien = history.state.data;

    this.getDaTraLuong(this.nhanVien.Ma);
  }

  getDaTraLuong(id: string) {
    this.database.getNgayTraLuongGanNhat(id)
    .then(phieu=>{
      console.log('Ngày trả lương gần nhất', phieu.NgayTraLuong);

      if (phieu.NgayTraLuong.getMonth() == (new Date()).getMonth())
        this.daTraLuong = true;
      else
        this.daTraLuong = false;
    })
  }

  nhapTien($event) {
    this.phieu.SoTienTra = this.phieu.SoNgayLam * this.nhanVien.Luong + this.phieu.SoTienThuong;
  }
  
  nhapNgay($event) {
    this.phieu.SoTienTra = this.phieu.SoNgayLam * this.nhanVien.Luong + this.phieu.SoTienThuong;
  }

  nhapThuong($event) {
    this.phieu.SoTienTra = this.phieu.SoNgayLam * this.nhanVien.Luong + this.phieu.SoTienThuong;
  }
  
  traLuong($event) {
    this.phieu.MaNhanVien = this.nhanVien.Ma;
    this.phieu.MucLuong = this.nhanVien.Luong;
    this.phieu.SoTienTra = this.phieu.SoNgayLam * this.nhanVien.Luong + this.phieu.SoTienThuong;

    this.database.createPhieuTinhLuong(this.phieu).then(val => console.log(val));
  }

}
