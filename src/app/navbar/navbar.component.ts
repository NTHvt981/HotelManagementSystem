import { isLeTan, isQuanLy, isThucAn, isThueXe } from 'src/app/services/auth.service';
import { NhanVien } from 'src/app/models/nhan-vien';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';

import { MenuItem } from "primeng/api";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  items: MenuItem[];
  user: NhanVien = null;

  isLeTan = isLeTan;
  isQuanLy = isQuanLy;
  isThucAn = isThucAn;
  isThueXe = isThueXe;

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.items = [
      {
        id: 'dang-nhap',
        label: 'Đăng nhập',
        routerLink: 'dang-nhap'
      },
      {
        id: 'dang-ky',
        label: 'Đăng ký',
        routerLink: 'dang-ky'
      },
      {
        visible: false,

        id: 'dang-xuat',
        label: 'Đăng xuất',
        command: () => {
          this.auth.signOut();
        }
      },

      {
        visible: false,

        id: 'ca-nhan',
        label: 'Thông tin cá nhân',
        routerLink: 'thong-tin-ca-nhan'
      },
      {
        visible: false,

        id: 'tra-cuu-thue',
        label: 'Tra cứu phiếu thuê phòng',
        routerLink: 'tra-cuu-phieu-thue-phong'
      },
      {
        visible: false,

        id: 'quan-ly',
        label: 'Chức năng quản lý',
        items: [
          {label: 'Thêm nhân viên', routerLink:'them-nhan-vien'},
          {label: 'Tra cứu nhân viên', routerLink:'tra-cuu-nhan-vien'},

          {label: 'Tra cứu khách hàng', routerLink:'tra-cuu-khach'},

          {label: 'Thêm phòng', routerLink:'them-phong'},
          {label: 'Tra cứu phòng', routerLink:'tra-cuu-phong'},
          
          {label: 'Thêm món ăn', routerLink:'them-mon-an'},
          {label: 'Tra cứu món ăn', routerLink:'tra-cuu-mon-an'},
          
          {label: 'Thêm xe', routerLink:'them-xe'},
          {label: 'Tra cứu xe', routerLink:'tra-cuu-xe'},

          {label: 'Thống kê doanh thu', routerLink:'thong-ke'}
        ]
      },
      {
        visible: false,

        id: 'le-tan',
        label: 'Chức năng lễ tân',
        items: [
          {label: 'Thêm khách hàng', routerLink:'them-khach'},
          {label: 'Tra cứu khách hàng', routerLink:'tra-cuu-khach'},
          {label: 'Tra cứu phòng', routerLink:'tra-cuu-phong'},
          {label: 'Thống kê doanh thu', routerLink:'thong-ke'}
        ]
      },
      {
        visible: false,

        id: 'thuc-an',
        label: 'Chức năng nhân viên phục vụ thức ăn',
        items: [
          {label: 'Tra cứu món ăn', routerLink:'tra-cuu-mon-an'}
        ]
      },
      {
        visible: false,

        id: 'thue-xe',
        label: 'Chức năng nhân viên thuê xe',
        items: [
          {label: 'Tra cứu xe', routerLink:'tra-cuu-xe'}
        ]
      }
    ]
    
    this.auth.getUser().then(
      val => this.setAuth(val)
    )

    this.auth.user.subscribe(
      val => this.setAuth(val)
    )
  }

  setAuth(val: NhanVien) {

    if (val == undefined)
    {
      this.items[0].visible = true;
    }
    else
    {
      this.items[2].visible = true;
      this.items[3].visible = true;
      this.items[4].visible = true;

      if (isQuanLy(val)) this.items[5].visible = true;
      if (isLeTan(val)) this.items[6].visible = true;
      if (isThucAn(val)) this.items[7].visible = true;
      if (isThueXe(val)) this.items[8].visible = true;
    }
  }
}
