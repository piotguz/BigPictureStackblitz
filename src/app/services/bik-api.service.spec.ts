import { TestBed } from '@angular/core/testing';

import { BikApiService } from './bik-api.service';

describe('BikApiService', () => {
  let service: BikApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BikApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
