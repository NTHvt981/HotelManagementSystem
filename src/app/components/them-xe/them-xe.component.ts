import { Xe } from './../../models/xe';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-them-xe',
  templateUrl: './them-xe.component.html',
  styleUrls: ['./them-xe.component.css']
})
export class ThemXeComponent implements OnInit {
  xe: Xe = new Xe();

  constructor() { }

  ngOnInit(): void {
  }

  onImageUpload($event) {

  }

  them($them) {
    
  }
}
