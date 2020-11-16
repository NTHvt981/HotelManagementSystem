import { DangKyComponent } from './components/dang-ky/dang-ky.component';
import { DangNhapComponent } from './components/dang-nhap/dang-nhap.component';
import { ThongTinCaNhanComponent } from './components/thong-tin-ca-nhan/thong-tin-ca-nhan.component';
import { LapPhieuThueXeComponent } from './components/lap-phieu-thue-xe/lap-phieu-thue-xe.component';
import { TraCuuPhieuThuePhongComponent } from './components/tra-cuu-phieu-thue-phong/tra-cuu-phieu-thue-phong.component';
import { LapPhieuThuePhongComponent } from './components/lap-phieu-thue-phong/lap-phieu-thue-phong.component';
import { Xe } from './models/xe';
import { ChiTietXeComponent } from './components/chi-tiet-xe/chi-tiet-xe.component';
import { ThemXeComponent } from './components/them-xe/them-xe.component';
import { TraCuuXeComponent } from './components/tra-cuu-xe/tra-cuu-xe.component';
import { MonAn } from './models/mon-an';
import { ChiTietMonAnComponent } from './components/chi-tiet-mon-an/chi-tiet-mon-an.component';
import { ThemMonAnComponent } from './components/them-mon-an/them-mon-an.component';
import { TraCuuMonAnComponent } from './components/tra-cuu-mon-an/tra-cuu-mon-an.component';
import { Phong } from './models/phong';
import { ChiTietPhongComponent } from './components/chi-tiet-phong/chi-tiet-phong.component';
import { ThemPhongComponent } from './components/them-phong/them-phong.component';
import { KhachHang } from './models/khach-hang';
import { ThemKhachComponent } from './components/them-khach/them-khach.component';
import { ChiTietKhachComponent } from './components/chi-tiet-khach/chi-tiet-khach.component';
import { ThemNhanVienComponent } from './components/them-nhan-vien/them-nhan-vien.component';
import { NhanVien } from './models/nhan-vien';
import { ChiTietNhanVienComponent } from './components/chi-tiet-nhan-vien/chi-tiet-nhan-vien.component';
import { TraCuuPhongComponent } from './components/tra-cuu-phong/tra-cuu-phong.component';
import { TraCuuNhanVienComponent } from './components/tra-cuu-nhan-vien/tra-cuu-nhan-vien.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TraCuuKhachComponent } from './components/tra-cuu-khach/tra-cuu-khach.component';
import { LapPhieuThucAnComponent } from './components/lap-phieu-thuc-an/lap-phieu-thuc-an.component';
import { LapHoaDonComponent } from './components/lap-hoa-don/lap-hoa-don.component';
import { TinhLuongNhanVienComponent } from './components/tinh-luong-nhan-vien/tinh-luong-nhan-vien.component';

const routes: Routes = [
  
  {
    pathMatch: 'full',
    path: 'dang-ky',
    component: DangKyComponent
  },
  {
    pathMatch: 'full',
    path: 'dang-nhap',
    component: DangNhapComponent
  },

  {
    pathMatch: 'full',
    path: 'thong-tin-ca-nhan',
    component: ThongTinCaNhanComponent
  },

  {
    pathMatch: 'full',
    path: 'tra-cuu-nhan-vien',
    component: TraCuuNhanVienComponent
  },
  {
    path: 'tinh-luong-nhan-vien',
    component: TinhLuongNhanVienComponent
  },
  {
    pathMatch: 'full',
    path: 'them-nhan-vien',
    component: ThemNhanVienComponent
  },
  {
    path: 'chi-tiet-nhan-vien',
    component: ChiTietNhanVienComponent,
    data: {nhanVien: NhanVien}
  },

  {
    pathMatch: 'full',
    path: 'tra-cuu-khach',
    component: TraCuuKhachComponent
  },
  {
    pathMatch: 'full',
    path: 'them-khach',
    component: ThemKhachComponent
  },
  {
    path: 'chi-tiet-khach',
    component: ChiTietKhachComponent,
    data: {khachHang: KhachHang}
  },

  {
    pathMatch: 'full',
    path: 'tra-cuu-phong',
    component: TraCuuPhongComponent
  },
  {
    pathMatch: 'full',
    path: 'them-phong',
    component: ThemPhongComponent
  },
  {
    path: 'chi-tiet-phong',
    component: ChiTietPhongComponent,
    data: {phong: Phong}
  },

  {
    pathMatch: 'full',
    path: 'tra-cuu-mon-an',
    component: TraCuuMonAnComponent
  },
  {
    pathMatch: 'full',
    path: 'them-mon-an',
    component: ThemMonAnComponent
  },
  {
    path: 'chi-tiet-mon-an',
    component: ChiTietMonAnComponent,
    data: {monAn: MonAn}
  },

  {
    pathMatch: 'full',
    path: 'tra-cuu-xe',
    component: TraCuuXeComponent
  },
  {
    pathMatch: 'full',
    path: 'them-xe',
    component: ThemXeComponent
  },
  {
    path: 'chi-tiet-xe',
    component: ChiTietXeComponent,
    data: {xe: Xe}
  },

  {
    path: 'lap-phieu-thue-phong',
    component: LapPhieuThuePhongComponent,
    data: {
      khachHang: KhachHang,
      phong: Phong
    }
  },
  {
    path: 'tra-cuu-phieu-thue-phong',
    component: TraCuuPhieuThuePhongComponent,
  },
  
  {
    path: 'lap-phieu-thuc-an',
    component: LapPhieuThucAnComponent
  },
  {
    path: 'lap-phieu-thue-xe',
    component: LapPhieuThueXeComponent
  },
  {
    path: 'lap-hoa-don',
    component: LapHoaDonComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
