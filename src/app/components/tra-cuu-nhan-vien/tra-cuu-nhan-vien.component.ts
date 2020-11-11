import { NhanVienService } from './../../services/nhan-vien.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NhanVien } from "../../models/nhan-vien";

@Component({
  selector: 'app-tra-cuu-nhan-vien',
  templateUrl: './tra-cuu-nhan-vien.component.html',
  styleUrls: ['./tra-cuu-nhan-vien.component.css']
})
export class TraCuuNhanVienComponent implements OnInit {
  editable: boolean = false;

  sdtNhanVien: string = "";
  gtNhanVien: string = "";
  maNhanVien: string = "";
  tenNhanVien: string = "";

  dsNhanVien: NhanVien[] = [];
  selectedNhanVien: NhanVien;

  constructor(private router: Router, private database: NhanVienService) { }

  ngOnInit(): void {
    this.taiLai(null)
  }

  onSelect($event) {
    this.maNhanVien = this.selectedNhanVien.Ma;
    this.tenNhanVien = this.selectedNhanVien.Ten;
    this.gtNhanVien = this.selectedNhanVien.GioiTinh;
    this.sdtNhanVien = this.selectedNhanVien.SoDienThoai;
  }

  xoa($event) {
    this.database.delete(this.selectedNhanVien.Ma);
    this.taiLai(null);
  }

  xemChiTiet($event) {
    this.router.navigateByUrl('/chi-tiet-nhan-vien', 
      {
        state: {
          data: this.selectedNhanVien
        }
      });
  }

  timKiem($event) {
    this.database.readAllOnceBy(
      this.maNhanVien, this.tenNhanVien,
      this.gtNhanVien, this.sdtNhanVien
      ).then((dsNv) => {
        this.dsNhanVien = dsNv;
      })
  }

  taiLai($event) {
    this.maNhanVien = '';
    this.tenNhanVien = '';
    this.sdtNhanVien = '';
    
    this.database.readAllOnce(
      
    ).then((dsNv) => {
        this.dsNhanVien = dsNv;
      })
  }

  tinhLuong($event) {
    this.router.navigateByUrl('/tinh-luong-nhan-vien', 
      {
        state: {
          data: this.selectedNhanVien
        }
      });
  }
}
