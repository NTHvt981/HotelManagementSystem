import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiTietMonAnComponent } from './chi-tiet-mon-an.component';

describe('ChiTietMonAnComponent', () => {
  let component: ChiTietMonAnComponent;
  let fixture: ComponentFixture<ChiTietMonAnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChiTietMonAnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChiTietMonAnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
