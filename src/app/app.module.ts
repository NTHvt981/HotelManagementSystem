import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import { SlideMenuModule } from 'primeng/slidemenu';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {InputNumberModule} from 'primeng/inputnumber';
import {DropdownModule} from 'primeng/dropdown';
import {InputSwitchModule} from 'primeng/inputswitch';
import {PasswordModule} from 'primeng/password';
import {RadioButtonModule} from 'primeng/radiobutton';
import {SliderModule} from 'primeng/slider';
import {SelectButtonModule} from 'primeng/selectbutton';
import {ToggleButtonModule} from 'primeng/togglebutton';
import {CheckboxModule} from 'primeng/checkbox';
import {CalendarModule} from 'primeng/calendar';
import {ButtonModule} from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import {TableModule} from 'primeng/table';
import {CardModule} from 'primeng/card';
import {FileUploadModule} from 'primeng/fileupload';

import { TraCuuNhanVienComponent } from './components/tra-cuu-nhan-vien/tra-cuu-nhan-vien.component';
import { TraCuuKhachComponent } from './components/tra-cuu-khach/tra-cuu-khach.component';
import { TraCuuPhongComponent } from './components/tra-cuu-phong/tra-cuu-phong.component';
import { FormsModule } from '@angular/forms';
import { ChiTietNhanVienComponent } from './components/chi-tiet-nhan-vien/chi-tiet-nhan-vien.component';
import { ThemNhanVienComponent } from './components/them-nhan-vien/them-nhan-vien.component';
import { ThemKhachComponent } from './components/them-khach/them-khach.component';
import { ChiTietKhachComponent } from './components/chi-tiet-khach/chi-tiet-khach.component';
import { ThemPhongComponent } from './components/them-phong/them-phong.component';
import { ChiTietPhongComponent } from './components/chi-tiet-phong/chi-tiet-phong.component';
import { ThemMonAnComponent } from './components/them-mon-an/them-mon-an.component';
import { TraCuuMonAnComponent } from './components/tra-cuu-mon-an/tra-cuu-mon-an.component';
import { ChiTietMonAnComponent } from './components/chi-tiet-mon-an/chi-tiet-mon-an.component';
import { TraCuuXeComponent } from './components/tra-cuu-xe/tra-cuu-xe.component';
import { ThemXeComponent } from './components/them-xe/them-xe.component';
import { ChiTietXeComponent } from './components/chi-tiet-xe/chi-tiet-xe.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TraCuuNhanVienComponent,
    TraCuuKhachComponent,
    TraCuuPhongComponent,
    ChiTietNhanVienComponent,
    ThemNhanVienComponent,
    ThemKhachComponent,
    ChiTietKhachComponent,
    ThemPhongComponent,
    ChiTietPhongComponent,
    ThemMonAnComponent,
    TraCuuMonAnComponent,
    ChiTietMonAnComponent,
    TraCuuXeComponent,
    ThemXeComponent,
    ChiTietXeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,

    SlideMenuModule,
    InputTextareaModule,
    InputNumberModule,
    DropdownModule,
    InputSwitchModule,
    PasswordModule,
    RadioButtonModule,
    SliderModule,
    SelectButtonModule,
    ToggleButtonModule,
    CheckboxModule,
    CalendarModule,
    ButtonModule,
    InputTextModule,
    TableModule,
    CardModule,
    FileUploadModule,

    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
