import { TestBed } from '@angular/core/testing';

import { PhieuDichVuService } from './phieu-dich-vu.service';

describe('PhieuDichVuService', () => {
  let service: PhieuDichVuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhieuDichVuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
