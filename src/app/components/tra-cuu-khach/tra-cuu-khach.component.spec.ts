import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraCuuKhachComponent } from './tra-cuu-khach.component';

describe('TraCuuKhachComponent', () => {
  let component: TraCuuKhachComponent;
  let fixture: ComponentFixture<TraCuuKhachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraCuuKhachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraCuuKhachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
