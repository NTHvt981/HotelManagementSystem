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

  nhanViens: NhanVien[] = [];
  selectedNhanVien: NhanVien;

  constructor(private router: Router) { }

  ngOnInit(): void {
    for (let i = 0; i < 100; i++) {
      if (i % 2 == 1) {
        this.nhanViens.push(new NhanVien({
          Ma: (i*i + 1000).toString(),
          Ten: 'Nguyễn Hoàng A',
          GioiTinh: 'Nam',
          ChucVu: 'Nhân viên thức ăn',
          Luong: 12_000_0,
          SoDienThoai: '123-4560-789'
        }));
      } else {
        this.nhanViens.push(new NhanVien({
          Ma: (i*i + 1000).toString(),
          Ten: 'Trần Thị B',
          GioiTinh: 'Nữ',
          ChucVu: 'Nhân viên quản lý',
          Luong: 18_000_0,
          SoDienThoai: '123-4560-789'
        }));
      }
    }
  }

  onSelect($event) {
    this.maNhanVien = this.selectedNhanVien.Ma;
    this.tenNhanVien = this.selectedNhanVien.Ten;
    this.gtNhanVien = this.selectedNhanVien.GioiTinh;
    this.sdtNhanVien = this.selectedNhanVien.SoDienThoai;
  }

  xoa($event) {
    if (this.selectedNhanVien == null) return;

    let index = this.nhanViens.indexOf(this.selectedNhanVien, 0);
    if (index > -1) {
      this.nhanViens.splice(index, 1);
    }
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
    console.log("Tìm kiếm!");

    let _nhanViens: NhanVien[] = [];

    this.nhanViens.forEach((nv, i) => {
      if (
        nv.Ma.includes(this.maNhanVien) &&
        nv.Ten.includes(this.tenNhanVien) &&
        nv.GioiTinh.includes(this.gtNhanVien) &&
        nv.SoDienThoai.includes(this.sdtNhanVien)
        )
        _nhanViens.push(nv);
    })

    this.nhanViens = _nhanViens;
  }

  taiLai($event) {
    this.maNhanVien = null;
    this.tenNhanVien = null;
    this.sdtNhanVien = null;
    this.gtNhanVien = null;
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
