import { AuthService, isQuanLy } from './../../services/auth.service';
import { NhanVien } from 'src/app/models/nhan-vien';
import { KhachHangService } from './../../services/khach-hang.service';
import { KhachHang } from './../../models/khach-hang';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SelectItem } from 'primeng/api';
import { isLeTan } from 'src/app/services/auth.service';

@Component({
  selector: 'app-tra-cuu-khach',
  templateUrl: './tra-cuu-khach.component.html',
  styleUrls: ['./tra-cuu-khach.component.css']
})
export class TraCuuKhachComponent implements OnInit {
  editable: boolean = false;
  user: NhanVien = new NhanVien();
  
  ma: string = "";
  ten: string = "";
  gioiTinh: string = "";
  sdt: string = "";

  cmnd: string = "";
  tinhTrang: string = "";

  tinhTrangOptions: SelectItem[] = [
    {label: 'Không thuê', value:'Không thuê'},
    {label: 'Đang thuê', value:'Đang thuê'},
  ];

  khachHangs: KhachHang[] = [];
  selectedKh: KhachHang;

  isLeTan = isLeTan;
  isQuanLy = isQuanLy;

  constructor(private router: Router, 
    private database: KhachHangService,
    private auth: AuthService) { }

  ngOnInit(): void {
    this.taiLai(null);
    
    this.auth.user.subscribe(val => this.user = val)
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
    this.database.readAllOnceBy(this.ma, this.ten, this.gioiTinh, this.sdt)
    .then(khachs => {
      this.khachHangs = khachs
    })
  }

  taiLai($event) {
    this.ma = '';
    this.ten =  '';
    this.sdt =  '';
    this.gioiTinh =  '';

    this.database.readAllOnce().then(khachs => {
      this.khachHangs = khachs
    })
  }
  
  lapPhieuThue($event) {
    if (this.selectedKh != null && this.selectedKh != undefined)
      if (this.selectedKh.TinhTrang != 'Không thuê') return;

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

  xoa($event) {
    this.database.erase(this.selectedKh.Ma);
    this.taiLai(null);
  }
}
