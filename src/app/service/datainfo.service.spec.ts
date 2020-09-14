import { TestBed } from '@angular/core/testing';

import { DatainfoService } from './datainfo.service';

describe('DatainfoService', () => {
  let service: DatainfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatainfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
