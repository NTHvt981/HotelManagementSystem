import { LoaiPhongOptions, Phong, TinhTrangOptions } from './../../models/phong';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-them-phong',
  templateUrl: './them-phong.component.html',
  styleUrls: ['./them-phong.component.css']
})
export class ThemPhongComponent implements OnInit {
  phong: Phong = new Phong();
  tinhTrangOptions = TinhTrangOptions;
  loaiOptions = LoaiPhongOptions;

  constructor() { }

  ngOnInit(): void {
  }

  onImageUpload($event) {

  }

  them($event) {

  }
}
