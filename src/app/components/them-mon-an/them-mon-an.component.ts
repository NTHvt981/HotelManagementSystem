import { ImageService } from './../../services/image.service';
import { MonAnService } from './../../services/mon-an.service';
import { MonAn } from './../../models/mon-an';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-them-mon-an',
  templateUrl: './them-mon-an.component.html',
  styleUrls: ['./them-mon-an.component.css']
})
export class ThemMonAnComponent implements OnInit {
  monAn: MonAn = new MonAn();

  constructor(private database: MonAnService, private imgStorage: ImageService) { }

  ngOnInit(): void {
  }

  them($event) {
    this.database.create(this.monAn).then((value) => console.log(value));
  }
}
