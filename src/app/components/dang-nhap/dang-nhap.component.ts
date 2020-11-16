import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dang-nhap',
  templateUrl: './dang-nhap.component.html',
  styleUrls: ['./dang-nhap.component.css']
})
export class DangNhapComponent implements OnInit {
  email = '';
  password = '';

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  dangNhap($event) {
    this.auth.signIn(this.email, this.password)
      .then(val => console.log(val))
      .catch(val => console.log(val))
  }
}
