import { PhieuThuePhongService } from './../../services/phieu-thue-phong.service';
import { HoaDonService } from './../../services/hoa-don.service';
import { PhieuDichVuService } from './../../services/phieu-dich-vu.service';
import { NhanVienService } from './../../services/nhan-vien.service';
import { PhongService } from './../../services/phong.service';
import { KhachHangService } from './../../services/khach-hang.service';
import { Router } from '@angular/router';
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
  nhanVien: NhanVien = new NhanVien();
  khachHang: KhachHang = new KhachHang();
  phong: Phong = new Phong();

  phiDV = 0;
  phiPhong = 0;
  hoaDon = new HoaDon();

  loadP = false;
  loadK = false;
  loadNV = false;
  loadDV = false;

  constructor(
    private router: Router,
    private khachS: KhachHangService,
    private phongS: PhongService,
    private nhanVienS: NhanVienService,
    private phieuDVS: PhieuDichVuService,
    private hoaDonS: HoaDonService,
    private thuePhongS: PhieuThuePhongService
    ) { }

  ngOnInit(): void {
    if (history.state.data == undefined)
      this.router.navigateByUrl('/tra-cuu-phieu-thue-phong')
      
    //this line get the data from url
    this.phieuThuePhong = history.state.data;

    console.log('PHIẾU THUÊ PHÒNG', this.phieuThuePhong);

    this.traCuuLeTan(this.phieuThuePhong.MaLeTan);
    this.traCuuKhach(this.phieuThuePhong.MaKhach);
    this.traCuuPhong(this.phieuThuePhong.MaPhong);
    this.traCuuDSPDV(this.phieuThuePhong.Ma);
  }
  
  traCuuKhach(maKhach: string) {
    this.khachS.readOnce(maKhach)
      .then(khachHang => {
        this.khachHang = khachHang;

        this.loadK = true;
        
        // console.log(khachHang)
      })
  }
  
  traCuuPhong(maPhong: string) {
    this.phongS.readOnce(maPhong)
      .then(phong => {
        this.phong = phong;
        
        /**
         * After get phong, calculate the cost
         */
        this.tinhCPPhong();
        this.tinhTongCP();

        this.loadP = true;
        
        // console.log(phong)
      })
  }

  traCuuLeTan(maLeTan: string) {
    //query dữ liệu từ firebase, thông qua mã lễ tân
    this.nhanVienS.readOnce(maLeTan)
      .then(leTan => {
        this.nhanVien = leTan;
        
        /**
         * After get ds dv, calculate the cost
         */
        this.tinhCPDV();
        this.tinhTongCP();

        this.loadNV = true;
        
        // console.log(leTan)
      })
  }

  traCuuDSPDV(maThuePhong: string) {
    //query dữ liệu từ firebase, thông qua mã thuê phòng
    this.phieuDVS.readAllOnceBy(maThuePhong)
      .then(dsPDV => {
        this.dsPhieuDichVu = dsPDV;

        this.loadDV = true;
      });
  }

  tinhCPDV() {
    this.dsPhieuDichVu.forEach(phieu => {
      this.phiDV = this.phiDV + phieu.ThanhTien;
    });
  }

  tinhCPPhong() {
    this.phiPhong = this.phong.GiaTheoGio * this.phieuThuePhong.GioThue +
      this.phong.GiaTheoNgay * this.phieuThuePhong.NgayThue;
  }

  tinhTongCP() {
    this.hoaDon.TongChiPhi = this.phiPhong + this.phiDV;
  }
  
  xacNhanLap($event) {
    this.hoaDon.NgayThue = this.phieuThuePhong.NgayThue;
    this.hoaDon.SoPhong = this.phong.SoPhong;
    this.hoaDon.TenKhach = this.khachHang.Ten;

    this.hoaDon.MaThuePhong = this.phieuThuePhong.Ma;
    this.hoaDon.GioThue = this.phieuThuePhong.GioThue;
    this.hoaDon.NgayThue = this.phieuThuePhong.NgayThue;
    
    this.hoaDonS.create(this.hoaDon)
      .then((val) => console.log(val));

    this.thuePhongS.setTrangThai(this.phieuThuePhong.Ma, 'Đã thanh toán')

    this.khachHang.TinhTrang = 'Không thuê';
    this.phong.TinhTrang = 'Không thuê';
    this.khachS.update(this.khachHang);
    this.phongS.update(this.phong);

    this.dsPhieuDichVu.map((phieu: PhieuDichVu) => {
      this.phieuDVS.setTrangThai(phieu.Ma, 'Đã thanh toán');
    })
  }
}
