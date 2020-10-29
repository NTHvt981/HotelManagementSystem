import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiTietNhanVienComponent } from './chi-tiet-nhan-vien.component';

describe('ChiTietNhanVienComponent', () => {
  let component: ChiTietNhanVienComponent;
  let fixture: ComponentFixture<ChiTietNhanVienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChiTietNhanVienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChiTietNhanVienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
