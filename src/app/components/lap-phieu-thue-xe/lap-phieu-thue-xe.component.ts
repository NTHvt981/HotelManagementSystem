import { Router } from '@angular/router';
import { Xe } from './../../models/xe';
import { PhieuThuePhong } from './../../models/phieu-thue-phong';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lap-phieu-thue-xe',
  templateUrl: './lap-phieu-thue-xe.component.html',
  styleUrls: ['./lap-phieu-thue-xe.component.css']
})
export class LapPhieuThueXeComponent implements OnInit {
  phieuThuePhong: PhieuThuePhong = new PhieuThuePhong();
  xe: Xe = new Xe();
  soGioThue: number = 0;
  soNgayThue: number = 0;

  constructor(private router:Router) { }

  ngOnInit(): void {
    // if (history.state.data == undefined)
    //   this.router.navigateByUrl('/tra-cuu-phieu-thue-phong')

    this.phieuThuePhong = history.state.data.phieuThuePhong;
    this.xe = history.state.data.xe;
  }

  xacNhanLap($event) {
    
  }

}
