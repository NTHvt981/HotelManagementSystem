import { Component, OnInit } from '@angular/core';

import { MenuItem } from "primeng/api";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  items: MenuItem[];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Thông tin cá nhân',
        routerLink: 'thong-tin-ca-nhan'
      },
      {
        label: 'Tra cứu phiếu thuê phòng',
        routerLink: 'tra-cuu-thue-phong'
      },
      {
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
        label: 'Chức năng lễ tân',
        items: [
          {label: 'Thêm khách hàng', routerLink:'them-khach'},
          {label: 'Tra cứu khách hàng', routerLink:'tra-cuu-khach'},
          {label: 'Tra cứu phòng', routerLink:'tra-cuu-phong'},
          {label: 'Thống kê doanh thu', routerLink:'thong-ke'}
        ]
      },
      {
        label: 'Chức năng nhân viên phục vụ thức ăn',
        items: [
          {label: 'Tra cứu món ăn', routerLink:'tra-cuu-mon-an'}
        ]
      },
      {
        label: 'Chức năng nhân viên thuê xe',
        items: [
          {label: 'Tra cứu xe', routerLink:'tra-cuu-xe'}
        ]
      }
    ]
  }

}
