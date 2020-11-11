import { ImageService } from './../../services/image.service';
import { XeService } from './../../services/xe.service';
import { Router } from '@angular/router';
import { Xe } from './../../models/xe';
import { TinhTrangOptions } from 'src/app/models/xe';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chi-tiet-xe',
  templateUrl: './chi-tiet-xe.component.html',
  styleUrls: ['./chi-tiet-xe.component.css']
})
export class ChiTietXeComponent implements OnInit {
  editable = false;
  xe: Xe = new Xe();
  tinhTrangOptions = TinhTrangOptions;

  constructor(
    private router: Router, 
    private database: XeService, 
    private imgStorage: ImageService
    ) { }

  ngOnInit(): void {
    if (history.state.data == undefined)
      this.router.navigateByUrl('/tra-cuu-xe')
      
    //this line get the data from url
    this.xe = history.state.data;
  }

  onImageUpload($event) {
    this.imgStorage.uploadImage('xe', $event.files[0])
      .downloadUrl$.then((value) => {
        console.log('upload complete!')
        console.log(value)

        /**
         * set image view
         */
        this.imgStorage.getImageUrl(value).subscribe((next) => {
          this.xe.HinhAnh = next;
        })
      })
  }

  chinhSua($event) {
    this.database.update(this.xe).then((val) => console.log(val))
  }
  
  xoa($event) {

  }

}
