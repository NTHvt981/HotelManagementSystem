import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraCuuNhanVienComponent } from './tra-cuu-nhan-vien.component';

describe('TraCuuNhanVienComponent', () => {
  let component: TraCuuNhanVienComponent;
  let fixture: ComponentFixture<TraCuuNhanVienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraCuuNhanVienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraCuuNhanVienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
