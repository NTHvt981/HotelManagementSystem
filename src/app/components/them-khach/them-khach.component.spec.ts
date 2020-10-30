import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemKhachComponent } from './them-khach.component';

describe('ThemKhachComponent', () => {
  let component: ThemKhachComponent;
  let fixture: ComponentFixture<ThemKhachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemKhachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemKhachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
