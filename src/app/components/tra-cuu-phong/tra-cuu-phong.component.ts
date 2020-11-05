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

  phongs: Phong[] = [];
  selectedPhong: Phong;

  khachHangThue: KhachHang = undefined;

  constructor(private router: Router) { }

  ngOnInit(): void {
    /**
     * for debug
     */
    for (let i = 0; i < 100; i++) {
      if (i % 2 == 1) {
        this.phongs.push(new Phong({
          Ma: (100 + i*i).toString(),
          SoPhong: "403",
          SoGiuong: 2,
          SoTang: 4,

          LoaiPhong: "Bình dân",
          GiaTheoGio: 30_000,
          GiaTheoNgay: 300_000
          })
        );
      } else {
        this.phongs.push(new Phong({
          Ma: (100 + i*i).toString(),
          SoPhong: "130",
          SoGiuong: 3,
          SoTang: 1,

          LoaiPhong: "Thương gia",
          GiaTheoGio: 60_000,
          GiaTheoNgay: 600_000
          })
        );
      }
    }


    //check if data sent have khach hang
    if (history.state.data != undefined) {
      this.khachHangThue = history.state.data.khachHang;
      console.log(this.khachHangThue);
    }

  }

  timKiem($event) {

  }

  taiLai($event) {

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
      if (this.selectedPhong != null && this.selectedPhong != undefined)
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
