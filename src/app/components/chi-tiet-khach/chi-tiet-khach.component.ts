import { KhachHang } from './../../models/khach-hang';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-chi-tiet-khach',
  templateUrl: './chi-tiet-khach.component.html',
  styleUrls: ['./chi-tiet-khach.component.css']
})
export class ChiTietKhachComponent implements OnInit {
  khachHang: KhachHang;
  editable: boolean = false;

  tinhTrangOptions: SelectItem[] = [
    {label: 'Không thuê', value:'Không thuê'},
    {label: 'Đang thuê', value:'Đang thuê'},
  ]

  constructor(private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    if (history.state.data == undefined)
      this.router.navigateByUrl('/tra-cuu-khach')
      
    //this line get the data from url
    this.khachHang = history.state.data;
  }

  onImageUpload($event) {

  }

  chinhSua($event) {

  }
  
  xoa($event) {

  }
}
