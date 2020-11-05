import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemMonAnComponent } from './them-mon-an.component';

describe('ThemMonAnComponent', () => {
  let component: ThemMonAnComponent;
  let fixture: ComponentFixture<ThemMonAnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemMonAnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemMonAnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
