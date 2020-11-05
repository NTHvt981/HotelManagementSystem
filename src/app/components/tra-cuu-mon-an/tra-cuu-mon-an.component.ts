import { Router } from '@angular/router';
import { MonAn } from './../../models/mon-an';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tra-cuu-mon-an',
  templateUrl: './tra-cuu-mon-an.component.html',
  styleUrls: ['./tra-cuu-mon-an.component.css']
})
export class TraCuuMonAnComponent implements OnInit {
  editable = false;
  dsMonAn: MonAn[] = [];
  selectedMonAn: MonAn;

  ma: string;
  ten: string;
  gia: number;

  constructor(private router: Router) { }

  ngOnInit(): void {
    for (let i = 0; i < 100; i++) {
      if (i % 2 == 1) {
        this.dsMonAn.push(new MonAn({
          Ma: (1000 + i*i).toString(),
          Ten: 'Bạch tuộc nướng',
          Gia: 25_000
        }));
      } else {
        this.dsMonAn.push(new MonAn({
          Ma: (1000 + i*i).toString(),
          Ten: 'Cơm gà xối mỡ',
          Gia: 35_000
        }));
      }
    }
  }

  timKiem($event) {

  }

  taiLai($event) {

  }

  onSelect($event) {
    this.ma = this.selectedMonAn.Ma;
    this.ten = this.selectedMonAn.Ten;
    this.gia = this.selectedMonAn.Gia;
  }

  lapPhieu($event) {

  }

  xemChiTiet($event) {
    this.router.navigateByUrl('/chi-tiet-mon-an', 
      {
        state: {
          data: this.selectedMonAn
      }
    });
  }
}
