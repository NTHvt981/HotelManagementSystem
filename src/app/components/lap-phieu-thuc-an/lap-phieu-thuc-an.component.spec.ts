import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LapPhieuThucAnComponent } from './lap-phieu-thuc-an.component';

describe('LapPhieuThucAnComponent', () => {
  let component: LapPhieuThucAnComponent;
  let fixture: ComponentFixture<LapPhieuThucAnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LapPhieuThucAnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LapPhieuThucAnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
