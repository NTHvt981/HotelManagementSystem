import { PhieuThuePhongService } from './../../services/phieu-thue-phong.service';
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

  constructor(private router: Router, private database: PhieuThuePhongService) { }

  ngOnInit(): void {
    this.taiLai(null);
  }

  timKiem($event) {
    this.database.readAllOnceBy(
      this.maThue,
      this.tgThue, this.tgTra,
      this.maKhach, this.maPhong, this.maLeTan,
      this.tinhTrang,
      this.ngayThue, this.gioThue
    )
      .then((dsPTP) => {
        this.dsPhieuThue = dsPTP;
      })
  }

  taiLai($event) {
    this.database.readAllOnce()
      .then((dsPTP) => {
        this.dsPhieuThue = dsPTP;
      })
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
    this.router.navigateByUrl('/lap-hoa-don', 
      {
        state: {
          data: this.selectedPhieuThue
      }
    });
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
