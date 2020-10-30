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
    pathMatch: 'full',
    path: 'tra-cuu-khach',
    component: TraCuuKhachComponent
  },
  {
    pathMatch: 'full',
    path: 'tra-cuu-phong',
    component: TraCuuPhongComponent
  },
  {
    path: 'chi-tiet-nhan-vien',
    component: ChiTietNhanVienComponent,
    data: {nhanVien: NhanVien}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
