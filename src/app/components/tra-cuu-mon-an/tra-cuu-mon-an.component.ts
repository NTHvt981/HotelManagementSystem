import { AuthService } from './../../services/auth.service';
import { MonAnService } from './../../services/mon-an.service';
import { PhieuThuePhong } from './../../models/phieu-thue-phong';
import { Router } from '@angular/router';
import { MonAn } from './../../models/mon-an';
import { Component, OnInit } from '@angular/core';
import { NhanVien } from 'src/app/models/nhan-vien';
import { isLeTan, isQuanLy, isThucAn, isThueXe } from 'src/app/services/auth.service';

@Component({
  selector: 'app-tra-cuu-mon-an',
  templateUrl: './tra-cuu-mon-an.component.html',
  styleUrls: ['./tra-cuu-mon-an.component.css']
})
export class TraCuuMonAnComponent implements OnInit {
  editable = false;
  dsMonAn: MonAn[] = [];
  selectedMonAn: MonAn;

  ma: string;
  ten: string;
  gia: number;

  phieuThuePhong: PhieuThuePhong;
  
  user: NhanVien = new NhanVien();

  isLeTan = isLeTan;
  isQuanLy = isQuanLy;
  isThucAn = isThucAn;
  isThueXe = isThueXe;

  constructor(private router: Router, 
    private database: MonAnService,
    private auth: AuthService) { }

  ngOnInit(): void {
    this.auth.user.subscribe(val => this.user = val)
    this.taiLai(null);

    if (history.state.data != undefined)
      this.phieuThuePhong = history.state.data
    else
      this.phieuThuePhong = null
  }

  timKiem($event) {
    this.database.readAllOnceBy(
      this.ma, this.ten, this.gia
    ).then((dsMonAn) => {
      this.dsMonAn = dsMonAn;
    })
  }

  taiLai($event) {
    this.database.readAllOnce().then((dsMonAn) => {
      this.dsMonAn = dsMonAn;
    })
  }

  onSelect($event) {
    this.ma = this.selectedMonAn.Ma;
    this.ten = this.selectedMonAn.Ten;
    this.gia = this.selectedMonAn.Gia;
  }

  lapPhieu($event) {
    if (this.phieuThuePhong != null)
      this.router.navigateByUrl('/lap-phieu-thuc-an', {
        state: {
          data: {
            monAn: this.selectedMonAn,
            phieuThuePhong: this.phieuThuePhong
          }
        }
      });
    else
      this.router.navigateByUrl('/tra-cuu-phieu-thue-phong');
  }

  xemChiTiet($event) {
    this.router.navigateByUrl('/chi-tiet-mon-an', 
      {
        state: {
          data: this.selectedMonAn
      }
    });
  }
}
