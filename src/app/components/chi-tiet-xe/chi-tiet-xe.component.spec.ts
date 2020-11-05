import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiTietXeComponent } from './chi-tiet-xe.component';

describe('ChiTietXeComponent', () => {
  let component: ChiTietXeComponent;
  let fixture: ComponentFixture<ChiTietXeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChiTietXeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChiTietXeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
