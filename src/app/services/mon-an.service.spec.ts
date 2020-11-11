import { TestBed } from '@angular/core/testing';

import { MonAnService } from './mon-an.service';

describe('MonAnService', () => {
  let service: MonAnService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MonAnService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
