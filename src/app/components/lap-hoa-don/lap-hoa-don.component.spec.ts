import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LapHoaDonComponent } from './lap-hoa-don.component';

describe('LapHoaDonComponent', () => {
  let component: LapHoaDonComponent;
  let fixture: ComponentFixture<LapHoaDonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LapHoaDonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LapHoaDonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
