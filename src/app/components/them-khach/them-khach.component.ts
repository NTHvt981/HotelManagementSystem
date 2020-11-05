import { KhachHang } from './../../models/khach-hang';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-them-khach',
  templateUrl: './them-khach.component.html',
  styleUrls: ['./them-khach.component.css']
})
export class ThemKhachComponent implements OnInit {
  khachHang: KhachHang = new KhachHang();

  constructor() { }

  ngOnInit(): void {
  }

  onImageUpload($event) {

  }

  them($event) {

  }
}
