import { NhanVien } from './../../models/nhan-vien';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-chi-tiet-nhan-vien',
  templateUrl: './chi-tiet-nhan-vien.component.html',
  styleUrls: ['./chi-tiet-nhan-vien.component.css']
})
export class ChiTietNhanVienComponent implements OnInit {
  nhanVien: NhanVien;
  editable: boolean = false;

  constructor(private router:Router) { }

  ngOnInit(): void {
    if (history.state.data == undefined)
      this.router.navigateByUrl('/tra-cuu-nhan-vien')

    //this line get the data from url
    this.nhanVien = history.state.data;
  }

  onImageUpload($event) {

  }

  chinhSua($event) {

  }
  
  xoa($event) {

  }
}
