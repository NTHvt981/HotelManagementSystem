import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemPhongComponent } from './them-phong.component';

describe('ThemPhongComponent', () => {
  let component: ThemPhongComponent;
  let fixture: ComponentFixture<ThemPhongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemPhongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemPhongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
