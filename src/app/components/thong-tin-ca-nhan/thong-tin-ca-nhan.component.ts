import { NhanVienService } from './../../services/nhan-vien.service';
import { AuthService } from './../../services/auth.service';
import { NhanVien } from './../../models/nhan-vien';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thong-tin-ca-nhan',
  templateUrl: './thong-tin-ca-nhan.component.html',
  styleUrls: ['./thong-tin-ca-nhan.component.css']
})
export class ThongTinCaNhanComponent implements OnInit {
  nhanVien: NhanVien;
  editable: boolean = false;

  constructor(
    private auth: AuthService,
    private database: NhanVienService
  ) { }

  ngOnInit(): void {
    this.getNhanVien();
  }

  getNhanVien() {
    this.auth.user.subscribe(next => {
      this.nhanVien = next;
    })
  }
  
  chinhSua($event) {
    this.database.update(this.nhanVien)
      .then((val) => console.log(val));
  }
}
