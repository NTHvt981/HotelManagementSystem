import { LoaiPhongOptions, Phong, TinhTrangOptions } from './../../models/phong';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chi-tiet-phong',
  templateUrl: './chi-tiet-phong.component.html',
  styleUrls: ['./chi-tiet-phong.component.css']
})
export class ChiTietPhongComponent implements OnInit {
  editable = false;

  phong: Phong;
  tinhTrangOptions = TinhTrangOptions;
  loaiOptions = LoaiPhongOptions;

  constructor(private router:Router) { }

  ngOnInit(): void {
    if (history.state.data == undefined)
      this.router.navigateByUrl('/tra-cuu-phong')
      
    //this line get the data from url
    this.phong = history.state.data;
  }

  onImageUpload($event) {

  }

  chinhSua($event) {

  }
  
  xoa($event) {

  }
}
