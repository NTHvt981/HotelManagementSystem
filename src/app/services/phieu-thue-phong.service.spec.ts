import { TestBed } from '@angular/core/testing';

import { PhieuThuePhongService } from './phieu-thue-phong.service';

describe('PhieuThuePhongService', () => {
  let service: PhieuThuePhongService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhieuThuePhongService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
