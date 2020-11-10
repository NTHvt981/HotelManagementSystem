import { HoaDon } from './../../models/hoa-don';
import { Phong } from './../../models/phong';
import { KhachHang } from './../../models/khach-hang';
import { NhanVien } from './../../models/nhan-vien';
import { PhieuDichVu } from './../../models/phieu-dich-vu';
import { PhieuThuePhong } from './../../models/phieu-thue-phong';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lap-hoa-don',
  templateUrl: './lap-hoa-don.component.html',
  styleUrls: ['./lap-hoa-don.component.css']
})
export class LapHoaDonComponent implements OnInit {
  clickable = false;
  phieuThuePhong: PhieuThuePhong = new PhieuThuePhong();
  dsPhieuDichVu: PhieuDichVu[] = [];
  nhanVien: NhanVien;
  khachHang: KhachHang;
  phong: Phong;

  phiDV = 0;
  phiPhong = 0;
  hoaDon = new HoaDon();

  constructor() { }

  ngOnInit(): void {
    // if (history.state.data == undefined)
    //   this.router.navigateByUrl('/tra-cuu-phieu-thue-phong')
      
    //this line get the data from url
    this.phieuThuePhong = history.state.data;

    console.log(this.phieuThuePhong);

    this.hoaDon.Ma = "HD1000";
    this.traCuuLeTan(this.phieuThuePhong.MaLeTan);
    this.traCuuKhach(this.phieuThuePhong.MaKhach);
    this.traCuuPhong(this.phieuThuePhong.MaPhong);
    this.traCuuDSPDV(this.phieuThuePhong.Ma);

    this.tinhCPDV();
    this.tinhCPPhong();
    this.tinhTongCP();
  }
  
  traCuuKhach(maKhach: string) {
    this.khachHang = new KhachHang({
      Ma: maKhach,
      Ten: 'Nguyễn Thanh D',
      GioiTinh: 'Nam',
      SoDienThoai: '123-4560-789',

      Cmnd: '07520340',
      TinhTrang: 'Không thuê'
    });
  }
  
  traCuuPhong(maPhong: string) {
    this.phong = new Phong({
      Ma: maPhong,
      SoPhong: "130",
      SoGiuong: 3,
      SoTang: 1,

      LoaiPhong: "Thương gia",
      GiaTheoGio: 60_000,
      GiaTheoNgay: 600_000
      });
  }

  traCuuLeTan(maLeTan: string) {
    //query dữ liệu từ firebase, thông qua mã lễ tân
    this.nhanVien = new NhanVien({
      Ma: maLeTan,
      Ten: 'Nguyễn Hoàng A',
      GioiTinh: 'Nam',
      ChucVu: 'Nhân viên thức ăn',
      Luong: 12_000_000,
      SoDienThoai: '123-4560-789'
    });
  }

  traCuuDSPDV(maThuePhong: string) {
    //query dữ liệu từ firebase, thông qua mã thuê phòng
    for (let i = 0; i < 4; i++) {
      this.dsPhieuDichVu.push(new PhieuDichVu({
        Ma: (1000 + i).toString(),
        MaThuePhong: maThuePhong,
        MaNhanVien: this.nhanVien.Ma,
        ThanhTien: 100_000
      }))
      
    }
  }

  tinhCPDV() {
    this.dsPhieuDichVu.forEach(phieu => {
      this.phiDV = this.phiDV + phieu.ThanhTien;
    });
  }

  tinhCPPhong() {
    if (this.phieuThuePhong.GioThue != undefined)
      this.phiPhong = this.phong.GiaTheoGio * this.phieuThuePhong.GioThue
    else
      this.phiPhong = this.phong.GiaTheoNgay * this.phieuThuePhong.NgayThue;
  }

  tinhTongCP() {
    this.hoaDon.TongChiPhi = this.phiPhong + this.phiDV;
  }
  
  xacNhanLap($event) {

  }
}
