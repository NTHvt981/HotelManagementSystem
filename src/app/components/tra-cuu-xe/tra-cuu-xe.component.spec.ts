import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraCuuXeComponent } from './tra-cuu-xe.component';

describe('TraCuuXeComponent', () => {
  let component: TraCuuXeComponent;
  let fixture: ComponentFixture<TraCuuXeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraCuuXeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraCuuXeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
