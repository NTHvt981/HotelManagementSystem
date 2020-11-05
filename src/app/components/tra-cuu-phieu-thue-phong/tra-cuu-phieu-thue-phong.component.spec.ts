import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraCuuPhieuThuePhongComponent } from './tra-cuu-phieu-thue-phong.component';

describe('TraCuuPhieuThuePhongComponent', () => {
  let component: TraCuuPhieuThuePhongComponent;
  let fixture: ComponentFixture<TraCuuPhieuThuePhongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraCuuPhieuThuePhongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraCuuPhieuThuePhongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
