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
        label: 'Tra cứu nhân viên',
        routerLink: '/tra-cuu-nhan-vien'
      },
      {
        label: 'Tra cứu khách hàng',
        routerLink: '/tra-cuu-khach'
      },
      {
        label: 'Tra cứu phòng',
        routerLink: '/tra-cuu-phong'
      },
      {
        label: 'Thống kê doanh thu'
      },
      {
        label: 'Thông tin cá nhân'
      },

      //Nhân viên quản lý
      {
        label: 'Chức năng quản lý',
        items: [
          {
            label: 'Thêm nhân viên',
            routerLink: '/them-nhan-vien'
          },
          {
            label: 'Thêm phòng'
          },
          {
            label: 'Tra cứu dịch vụ'
          },
          {
            label: 'Thêm dịch vụ'
          }
        ]
      },

      //Nhân viên lễ tân
      {
        label: 'Chức năng lễ tân',
        items: [
          {
            label: 'Thêm khách hàng'
          },
          {
            label: 'Lập phiếu thuê phòng'
          },
          {
            label: 'Lập hóa đơn'
          }
        ]
      }
    ]
  }

}
