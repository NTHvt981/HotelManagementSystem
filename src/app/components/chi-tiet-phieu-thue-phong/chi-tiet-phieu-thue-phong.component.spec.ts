import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiTietPhieuThuePhongComponent } from './chi-tiet-phieu-thue-phong.component';

describe('ChiTietPhieuThuePhongComponent', () => {
  let component: ChiTietPhieuThuePhongComponent;
  let fixture: ComponentFixture<ChiTietPhieuThuePhongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChiTietPhieuThuePhongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChiTietPhieuThuePhongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
