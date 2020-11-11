import { ImageService } from './../../services/image.service';
import { XeService } from './../../services/xe.service';
import { Xe } from './../../models/xe';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-them-xe',
  templateUrl: './them-xe.component.html',
  styleUrls: ['./them-xe.component.css']
})
export class ThemXeComponent implements OnInit {
  xe: Xe = new Xe();

  constructor(private database: XeService, private imgStorage: ImageService) { }

  ngOnInit(): void {
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

  them($them) {
    this.database.create(this.xe).then((value) => console.log(value));
  }
}
