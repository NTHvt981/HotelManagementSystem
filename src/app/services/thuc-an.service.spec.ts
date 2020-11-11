import { TestBed } from '@angular/core/testing';

import { ThucAnService } from './thuc-an.service';

describe('ThucAnService', () => {
  let service: ThucAnService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThucAnService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
