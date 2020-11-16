import { NhanVienService } from './../../services/nhan-vien.service';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dang-ky',
  templateUrl: './dang-ky.component.html',
  styleUrls: ['./dang-ky.component.css']
})
export class DangKyComponent implements OnInit {
  email = '';
  password = '';
  id = '';

  constructor(private auth: AuthService, private database: NhanVienService) { }

  ngOnInit(): void {
  }

  dangKy($event) {
    this.auth.register(this.email, this.password)
      .then(val => {
        console.log(val)

        this.database.asignUid(this.id, val.user.uid);
      })
      .catch(val => console.log(val))
  }
}
