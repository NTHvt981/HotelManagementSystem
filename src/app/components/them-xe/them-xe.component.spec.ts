import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemXeComponent } from './them-xe.component';

describe('ThemXeComponent', () => {
  let component: ThemXeComponent;
  let fixture: ComponentFixture<ThemXeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemXeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemXeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
