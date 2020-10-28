import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraCuuPhongComponent } from './tra-cuu-phong.component';

describe('TraCuuPhongComponent', () => {
  let component: TraCuuPhongComponent;
  let fixture: ComponentFixture<TraCuuPhongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraCuuPhongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraCuuPhongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
