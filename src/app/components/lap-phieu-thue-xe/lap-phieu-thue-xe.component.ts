import { ThueXeService } from './../../services/thue-xe.service';
import { XeService } from './../../services/xe.service';
import { PhieuThuePhongService } from './../../services/phieu-thue-phong.service';
import { Router } from '@angular/router';
import { Xe } from './../../models/xe';
import { PhieuThuePhong } from './../../models/phieu-thue-phong';
import { Component, OnInit } from '@angular/core';
import { PhieuThueXe } from 'src/app/models/phieu-thue-xe';

@Component({
  selector: 'app-lap-phieu-thue-xe',
  templateUrl: './lap-phieu-thue-xe.component.html',
  styleUrls: ['./lap-phieu-thue-xe.component.css']
})
export class LapPhieuThueXeComponent implements OnInit {
  phieuThuePhong: PhieuThuePhong = new PhieuThuePhong();
  xe: Xe = new Xe();
  phieuThueXe: PhieuThueXe = new PhieuThueXe();

  constructor(
    private router:Router,
    private thuePhongS: PhieuThuePhongService,
    private xeS: XeService,
    private thueXeS: ThueXeService
    ) { }

  ngOnInit(): void {
    // if (history.state.data == undefined)
    //   this.router.navigateByUrl('/tra-cuu-phieu-thue-phong')

    this.phieuThuePhong = history.state.data.phieuThuePhong;
    this.xe = history.state.data.xe;
  }

  xacNhanLap($event) {
    this.phieuThueXe.ThanhTien = this.xe.GiaTheoGio * this.phieuThueXe.GioThue +
      this.xe.GiaTheoNgay * this.phieuThueXe.NgayThue;
    
    this.phieuThueXe.MaXe = this.xe.Ma;
    this.phieuThueXe.MaThuePhong = this.phieuThuePhong.Ma;

    this.thueXeS.create(this.phieuThueXe).then(val => console.log(val))
    this.xeS.setTrangThai(this.xe.Ma, 'Đang thuê');
  }

}
