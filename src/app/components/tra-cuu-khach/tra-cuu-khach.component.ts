import { KhachHang } from './../../models/khach-hang';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-tra-cuu-khach',
  templateUrl: './tra-cuu-khach.component.html',
  styleUrls: ['./tra-cuu-khach.component.css']
})
export class TraCuuKhachComponent implements OnInit {
  editable: boolean = false;
  
  ma: string = "";
  ten: string = "";
  gioiTinh: string = "";
  sdt: string = "";

  cmnd: string = "";
  tinhTrang: string = "";

  tinhTrangOptions: SelectItem[];

  khachHangs: KhachHang[] = [];
  selectedKh: KhachHang;

  constructor(private router: Router) { }

  ngOnInit(): void {
    for (let i = 0; i < 100; i++) {
      if (i % 2 == 1) {
        this.khachHangs.push(new KhachHang({
          Ma: (i*i + 1000).toString(),
          Ten: 'Nguyễn Thanh D',
          GioiTinh: 'Nam',
          SoDienThoai: '123-4560-789',

          Cmnd: '07520340',
          TinhTrang: 'Không thuê'
        }));
      } else {
        this.khachHangs.push(new KhachHang({
          Ma: (i*i + 1000).toString(),
          Ten: 'Phúc Lộc C',
          GioiTinh: 'Nữ',
          SoDienThoai: '123-4560-789',
          
          Cmnd: '07520340',
          TinhTrang: 'Đang thuê'
        }));
      }
    }


    this.tinhTrangOptions = [
      {label: 'Không thuê', value:'Không thuê'},
      {label: 'Đang thuê', value:'Đang thuê'},
    ]
  }

  onSelect($event) {
    this.ma = this.selectedKh.Ma;
    this.ten = this.selectedKh.Ten;
    this.gioiTinh = this.selectedKh.GioiTinh;
    this.sdt = this.selectedKh.SoDienThoai;

    this.cmnd = this.selectedKh.Cmnd;
    this.tinhTrang = this.selectedKh.TinhTrang;
  }

  timKiem($event) { 
  }

  taiLai($event) {
    
  }
  
  lapPhieuThue($event) {
    if (this.selectedKh != null && this.selectedKh != undefined)
      this.router.navigateByUrl('tra-cuu-phong', {
        state: {
          data: {
            khachHang: this.selectedKh,
          }
        }
    })
  }
  
  xemChiTiet($event) {   
    this.router.navigateByUrl('/chi-tiet-khach', 
      {
        state: {
          data: this.selectedKh
        }
      });
  }
}
