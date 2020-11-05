import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiTietPhongComponent } from './chi-tiet-phong.component';

describe('ChiTietPhongComponent', () => {
  let component: ChiTietPhongComponent;
  let fixture: ComponentFixture<ChiTietPhongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChiTietPhongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChiTietPhongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
