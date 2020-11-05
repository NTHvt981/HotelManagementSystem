import { Router } from '@angular/router';
import { Xe } from './../../models/xe';
import { TinhTrangOptions } from 'src/app/models/xe';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chi-tiet-xe',
  templateUrl: './chi-tiet-xe.component.html',
  styleUrls: ['./chi-tiet-xe.component.css']
})
export class ChiTietXeComponent implements OnInit {
  editable = false;
  xe: Xe = new Xe();
  tinhTrangOptions = TinhTrangOptions;

  constructor(private router:Router) { }

  ngOnInit(): void {
    if (history.state.data == undefined)
      this.router.navigateByUrl('/tra-cuu-xe')
      
    //this line get the data from url
    this.xe = history.state.data;
  }

  onImageUpload($event) {

  }

  chinhSua($event) {

  }
  
  xoa($event) {

  }

}
