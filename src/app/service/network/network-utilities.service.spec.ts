import { TestBed } from '@angular/core/testing';

import { NetworkUtilitiesService } from './network-utilities.service';

describe('NetworkUtilitiesService', () => {
  let service: NetworkUtilitiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NetworkUtilitiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
