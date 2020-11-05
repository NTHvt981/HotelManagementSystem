import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LapPhieuThuePhongComponent } from './lap-phieu-thue-phong.component';

describe('LapPhieuThuePhongComponent', () => {
  let component: LapPhieuThuePhongComponent;
  let fixture: ComponentFixture<LapPhieuThuePhongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LapPhieuThuePhongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LapPhieuThuePhongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
