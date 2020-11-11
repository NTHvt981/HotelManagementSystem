import { ImageService } from './../../services/image.service';
import { PhongService } from './../../services/phong.service';
import { KhachHang } from './../../models/khach-hang';
import { Phong } from './../../models/phong';
import { Component, OnInit } from '@angular/core';
import { LoaiPhongOptions, TinhTrangOptions } from 'src/app/models/phong';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tra-cuu-phong',
  templateUrl: './tra-cuu-phong.component.html',
  styleUrls: ['./tra-cuu-phong.component.css']
})
export class TraCuuPhongComponent implements OnInit {
  editable: boolean = false;

  ma: string;
  soPhong: string;
  soTang: number;
  soGiuong: number;
  giaGio: number;
  giaNgay: number;
  loaiPhong: string;
  tinhTrang: string;

  loaiOptions = LoaiPhongOptions;
  tinhTrangOptions = TinhTrangOptions;

  dsPhong: Phong[] = [];
  selectedPhong: Phong;

  khachHangThue: KhachHang = undefined;

  constructor(private router: Router, private database: PhongService) { }

  ngOnInit(): void {
    this.taiLai(null)

    //check if data sent have khach hang
    if (history.state.data != undefined) {
      this.khachHangThue = history.state.data.khachHang;
      console.log(this.khachHangThue);
    }
  }

  timKiem($event) {
    this.database.readAllOnceBy(
      this.ma, this.soPhong,
      this.soTang, this.soGiuong,
      this.giaGio, this.giaNgay,
      this.loaiPhong, this.tinhTrang
    ).then((dsP) => {
      this.dsPhong = dsP;
    })
  }

  taiLai($event) {
    this.database.readAllOnce().then((dsP) => {
      this.dsPhong = dsP;
    })
  }

  onSelect($event) {
    this.ma = this.selectedPhong.Ma;
    this.soPhong = this.selectedPhong.SoPhong;
    this.soTang = this.selectedPhong.SoTang;
    this.soGiuong = this.selectedPhong.SoGiuong;
    this.giaGio = this.selectedPhong.GiaTheoGio;
    this.giaNgay = this.selectedPhong.GiaTheoNgay;
    this.loaiPhong = this.selectedPhong.LoaiPhong;
    this.tinhTrang = this.selectedPhong.TinhTrang;
  }

  lapPhieuThue($event) {
    console.log(this.khachHangThue)
    console.log(this.selectedPhong)

    if (this.khachHangThue != undefined) {
      this.router.navigateByUrl('lap-phieu-thue-phong', {
        state: {
          data: {
            khachHang: this.khachHangThue,
            phong: this.selectedPhong
          }
        }
      })
    }
    else {
      this.router.navigateByUrl('tra-cuu-khach')
    }
  }

  xemChiTiet($event) {
    this.router.navigateByUrl('/chi-tiet-phong', 
      {
        state: {
          data: this.selectedPhong
      }
    });
  }
}
