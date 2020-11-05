import { Router } from '@angular/router';
import { MonAn } from './../../models/mon-an';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chi-tiet-mon-an',
  templateUrl: './chi-tiet-mon-an.component.html',
  styleUrls: ['./chi-tiet-mon-an.component.css']
})
export class ChiTietMonAnComponent implements OnInit {
  editable = false;
  monAn: MonAn;

  constructor(private router: Router) { }

  ngOnInit(): void {
    if (history.state.data == undefined)
      this.router.navigateByUrl('/tra-cuu-mon-an');

    //this line get the data from url
    this.monAn = history.state.data;
  }

  chinhSua($event) {
    
  }

  xoa($event) {

  }
}
