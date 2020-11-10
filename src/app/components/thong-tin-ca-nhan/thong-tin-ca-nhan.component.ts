import { NhanVien } from './../../models/nhan-vien';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thong-tin-ca-nhan',
  templateUrl: './thong-tin-ca-nhan.component.html',
  styleUrls: ['./thong-tin-ca-nhan.component.css']
})
export class ThongTinCaNhanComponent implements OnInit {
  nhanVien: NhanVien;
  editable: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.getNhanVien();
  }

  getNhanVien() {
    this.nhanVien = new NhanVien({
      Ma: (1000).toString(),
      Ten: 'Nguyễn Hoàng A',
      GioiTinh: 'Nam',
      ChucVu: 'Nhân viên thức ăn',
      Luong: 12_000_000,
      SoDienThoai: '123-4560-789'
    })
  }
  
  chinhSua($event) {

  }
}
