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
        label: 'Tra cứu nhân viên'
      },
      {
        label: 'Tra cứu khách hảng'
      },
      {
        label: 'Tra cứu phòng'
      },
      {
        label: 'Thống kê doanh thu'
      },
      {
        label: 'Thông tin cá nhân'
      }
    ]
  }

}
