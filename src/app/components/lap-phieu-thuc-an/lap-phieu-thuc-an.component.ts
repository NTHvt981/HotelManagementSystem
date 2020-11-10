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
  monAn: MonAn = new MonAn();
  soLuong: number = 0;

  constructor(private router:Router) { }

  ngOnInit(): void {
    // if (history.state.data == undefined)
    //   this.router.navigateByUrl('/tra-cuu-phieu-thue-phong')

    this.phieuThuePhong = history.state.data.phieuThuePhong;
    this.monAn = history.state.data.monAn;
  }

  xacNhanLap($event) {
    
  }

}
