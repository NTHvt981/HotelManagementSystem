import { NhanVien } from './../../models/nhan-vien';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-them-nhan-vien',
  templateUrl: './them-nhan-vien.component.html',
  styleUrls: ['./them-nhan-vien.component.css']
})
export class ThemNhanVienComponent implements OnInit {
  nhanVien: NhanVien = new NhanVien();

  constructor() { }

  ngOnInit(): void {
  }

  onImageUpload($event) {

  }

  themNhanVien($event) {

  }
}
