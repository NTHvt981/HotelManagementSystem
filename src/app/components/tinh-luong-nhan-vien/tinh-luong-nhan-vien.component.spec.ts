import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TinhLuongNhanVienComponent } from './tinh-luong-nhan-vien.component';

describe('TinhLuongNhanVienComponent', () => {
  let component: TinhLuongNhanVienComponent;
  let fixture: ComponentFixture<TinhLuongNhanVienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TinhLuongNhanVienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TinhLuongNhanVienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
