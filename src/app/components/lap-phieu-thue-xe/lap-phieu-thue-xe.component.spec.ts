import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LapPhieuThueXeComponent } from './lap-phieu-thue-xe.component';

describe('LapPhieuThueXeComponent', () => {
  let component: LapPhieuThueXeComponent;
  let fixture: ComponentFixture<LapPhieuThueXeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LapPhieuThueXeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LapPhieuThueXeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
