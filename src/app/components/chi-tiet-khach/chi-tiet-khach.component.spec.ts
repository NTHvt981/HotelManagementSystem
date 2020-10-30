import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiTietKhachComponent } from './chi-tiet-khach.component';

describe('ChiTietKhachComponent', () => {
  let component: ChiTietKhachComponent;
  let fixture: ComponentFixture<ChiTietKhachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChiTietKhachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChiTietKhachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
