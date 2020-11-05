import { MonAn } from './../../models/mon-an';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-them-mon-an',
  templateUrl: './them-mon-an.component.html',
  styleUrls: ['./them-mon-an.component.css']
})
export class ThemMonAnComponent implements OnInit {
  monAn: MonAn = new MonAn();

  constructor() { }

  ngOnInit(): void {
  }

  them($event) {
    
  }
}
