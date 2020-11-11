import { ImageService } from './../../services/image.service';
import { MonAnService } from './../../services/mon-an.service';
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

  constructor(
    private router: Router,
    private database: MonAnService, 
    private imgStorage: ImageService
    ) { }

  ngOnInit(): void {
    if (history.state.data == undefined)
      this.router.navigateByUrl('/tra-cuu-mon-an');

    //this line get the data from url
    this.monAn = history.state.data;
  }

  chinhSua($event) {
    this.database.update(this.monAn).then((val) => console.log(val))
  }

  xoa($event) {

  }
}
