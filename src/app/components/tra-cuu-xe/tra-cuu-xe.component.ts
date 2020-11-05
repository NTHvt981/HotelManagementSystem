import { Router } from '@angular/router';
import { Xe } from './../../models/xe';
import { Component, OnInit } from '@angular/core';
import { TinhTrangOptions } from 'src/app/models/xe';

@Component({
  selector: 'app-tra-cuu-xe',
  templateUrl: './tra-cuu-xe.component.html',
  styleUrls: ['./tra-cuu-xe.component.css']
})
export class TraCuuXeComponent implements OnInit {
  editable: boolean = false;

  ma: string;
  ten: string;
  giaGio: number;
  giaNgay: number;
  tinhTrang: string;

  tinhTrangOptions = TinhTrangOptions;

  dsXe: Xe[] = [];
  selectedXe: Xe;

  constructor(private router: Router) { }

  ngOnInit(): void {
    for (let i = 0; i < 100; i++) {
      if (i % 2 == 1) {
        this.dsXe.push(new Xe({
          Ma: (100 + i*i).toString(),
          Ten: 'Xe Honda xanh duong',
          GiaTheoGio: 10_000,
          GiaTheoNgay: 100_000
          })
        );
      } else {
        this.dsXe.push(new Xe({
          Ma: (100 + i*i).toString(),
          Ten: 'Xe Wave đỏ đen',
          GiaTheoGio: 20_000,
          GiaTheoNgay: 200_000
          })
        );
      }
    }
  }
  timKiem($event) {

  }

  taiLai($event) {

  }

  onSelect($event) {
    this.ma = this.selectedXe.Ma;
    this.ten = this.selectedXe.Ten
    this.giaGio = this.selectedXe.GiaTheoGio;
    this.giaNgay = this.selectedXe.GiaTheoNgay;
    this.tinhTrang = this.selectedXe.TinhTrang;
  }

  lapPhieu($event) {

  }

  xemChiTiet($event) {
    this.router.navigateByUrl('/chi-tiet-xe', 
      {
        state: {
          data: this.selectedXe
      }
    });
  }
}
