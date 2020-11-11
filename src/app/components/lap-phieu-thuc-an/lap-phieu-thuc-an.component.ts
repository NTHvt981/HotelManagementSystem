import { PhieuThucAn } from './../../models/phieu-thuc-an';
import { ThucAnService } from './../../services/thuc-an.service';
import { MonAnService } from './../../services/mon-an.service';
import { PhieuThuePhongService } from './../../services/phieu-thue-phong.service';
import { Router } from '@angular/router';
import { MonAn } from './../../models/mon-an';
import { PhieuThuePhong } from './../../models/phieu-thue-phong';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lap-phieu-thuc-an',
  templateUrl: './lap-phieu-thuc-an.component.html',
  styleUrls: ['./lap-phieu-thuc-an.component.css']
})
export class LapPhieuThucAnComponent implements OnInit {
  phieuThuePhong: PhieuThuePhong = new PhieuThuePhong();
  phieuThucAn: PhieuThucAn = new PhieuThucAn();
  monAn: MonAn = new MonAn();

  constructor(
    private router:Router,
    private thuePhongS: PhieuThuePhongService,
    private monAnS: MonAnService,
    private phucVuThucAnS: ThucAnService
    ) { }

  ngOnInit(): void {
    // if (history.state.data == undefined)
    //   this.router.navigateByUrl('/tra-cuu-phieu-thue-phong')

    this.phieuThuePhong = history.state.data.phieuThuePhong;
    this.monAn = history.state.data.monAn;
  }

  xacNhanLap($event) {
    this.phieuThucAn.ThanhTien = this.phieuThucAn.SoLuong * this.monAn.Gia;
    
    this.phieuThucAn.MaMonAn = this.monAn.Ma;
    this.phieuThucAn.MaThuePhong = this.phieuThuePhong.Ma;

    this.phucVuThucAnS.create(this.phieuThucAn).then(val => console.log(val))
  }

}
