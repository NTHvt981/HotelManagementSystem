import { XeService } from './../../services/xe.service';
import { PhieuThuePhong } from './../../models/phieu-thue-phong';
import { Router } from '@angular/router';
import { Xe } from './../../models/xe';
import { Component, OnInit } from '@angular/core';
import { TinhTrangOptions } from 'src/app/models/xe';

@Component({
  selector: 'app-tra-cuu-xe',
  templateUrl: './tra-cuu-xe.component.html',
  styleUrls: ['./tra-cuu-xe.component.css']
})
export class TraCuuXeComponent implements OnInit {
  editable: boolean = false;
  dsXe: Xe[] = [];
  selectedXe: Xe;

  ma: string;
  ten: string;
  giaGio: number;
  giaNgay: number;
  tinhTrang: string;

  tinhTrangOptions = TinhTrangOptions;
  
  phieuThuePhong: PhieuThuePhong;

  constructor(private router: Router, private database: XeService) { }

  ngOnInit(): void {
    this.taiLai(null);

    if (history.state.data != undefined)
      this.phieuThuePhong = history.state.data
    else
      this.phieuThuePhong = null
  }

  timKiem($event) {
    this.database.readAllOnceBy(
      this.ma, this.ten, 
      this.giaGio, this.giaNgay,
      this.tinhTrang
    ).then((dsXe) => {
      this.dsXe = dsXe;
    })
  }

  taiLai($event) {
    this.database.readAllOnce().then((dsXe) => {
      this.dsXe = dsXe;
    })
  }

  onSelect($event) {
    this.ma = this.selectedXe.Ma;
    this.ten = this.selectedXe.Ten
    this.giaGio = this.selectedXe.GiaTheoGio;
    this.giaNgay = this.selectedXe.GiaTheoNgay;
    this.tinhTrang = this.selectedXe.TinhTrang;
  }

  lapPhieu($event) {
    if (this.selectedXe.TinhTrang != 'Không thuê') return;

    if (this.phieuThuePhong != null)
    this.router.navigateByUrl('/lap-phieu-thue-xe', {
      state: {
        data: {
          xe: this.selectedXe,
          phieuThuePhong: this.phieuThuePhong
        }
      }
    });
    else
      this.router.navigateByUrl('/tra-cuu-phieu-thue-phong');
  }

  xemChiTiet($event) {
    this.router.navigateByUrl('/chi-tiet-xe', 
      {
        state: {
          data: this.selectedXe
      }
    });
  }
}
