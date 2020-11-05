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

const routes: Routes = [
  {
    pathMatch: 'full',
    path: 'tra-cuu-nhan-vien',
    component: TraCuuNhanVienComponent
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


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
