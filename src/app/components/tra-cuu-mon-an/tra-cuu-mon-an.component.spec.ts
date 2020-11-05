import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraCuuMonAnComponent } from './tra-cuu-mon-an.component';

describe('TraCuuMonAnComponent', () => {
  let component: TraCuuMonAnComponent;
  let fixture: ComponentFixture<TraCuuMonAnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraCuuMonAnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraCuuMonAnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
