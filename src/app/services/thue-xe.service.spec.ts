import { TestBed } from '@angular/core/testing';

import { ThueXeService } from './thue-xe.service';

describe('ThueXeService', () => {
  let service: ThueXeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThueXeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
