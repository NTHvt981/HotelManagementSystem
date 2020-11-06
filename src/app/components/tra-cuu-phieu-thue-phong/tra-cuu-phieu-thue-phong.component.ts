import { Router } from '@angular/router';
import { PhieuThuePhong, TinhTrangOptions as ttThueOptions } from './../../models/phieu-thue-phong';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tra-cuu-phieu-thue-phong',
  templateUrl: './tra-cuu-phieu-thue-phong.component.html',
  styleUrls: ['./tra-cuu-phieu-thue-phong.component.css']
})
export class TraCuuPhieuThuePhongComponent implements OnInit {
  editable = false;
  dsPhieuThue: PhieuThuePhong[] = [];
  selectedPhieuThue: PhieuThuePhong;

  maThue: string;
  tgThue: Date;
  tgTra: Date;

  maKhach: string;
  maPhong: string;
  maLeTan: string;

  tinhTrang: string;
  gioThue: number;
  ngayThue: number;

  tinhTrangOptions = ttThueOptions;

  constructor(private router: Router) { }

  ngOnInit(): void {
    for (let i = 0; i < 100; i++) {
      if (i % 2 == 1) {
        this.dsPhieuThue.push(new PhieuThuePhong({
          Ma: (1000 + i*i).toString(),
          MaKhach: "1000",
          MaPhong: "1001",
          MaLeTan: "1004",

          ThoiGianTra: new Date(),
          GioThue: 7
        }));
      } else {
        this.dsPhieuThue.push(new PhieuThuePhong({
          Ma: (1000 + i*i).toString(),
          MaKhach: "1009",
          MaPhong: "1016",
          MaLeTan: "1025",

          ThoiGianTra: new Date(),
          NgayThue: 2
        }));
      }
    }
  }

  timKiem($event) {

  }

  taiLai($event) {

  }

  onSelect($event) {
    this.maThue = this.selectedPhieuThue.Ma;
    this.tgThue = this.selectedPhieuThue.ThoiGianThue;
    this.tgTra = this.selectedPhieuThue.ThoiGianTra;

    this.maKhach = this.selectedPhieuThue.MaKhach;
    this.maPhong = this.selectedPhieuThue.MaPhong;
    this.maLeTan = this.selectedPhieuThue.MaLeTan;
    
    this.tinhTrang = this.selectedPhieuThue.TinhTrang;
    this.gioThue = this.selectedPhieuThue.GioThue;
    this.ngayThue = this.selectedPhieuThue.NgayThue;
  }

  lapHoaDon($event) {
    
  }

  lapPhieuThucAn($event) {
    this.router.navigateByUrl('/tra-cuu-mon-an', 
      {
        state: {
          data: this.selectedPhieuThue
      }
    });
  }

  lapPhieuThueXe($event) {
    this.router.navigateByUrl('/tra-cuu-xe', 
      {
        state: {
          data: this.selectedPhieuThue
      }
    });
  }
}
