import { TestBed } from '@angular/core/testing';

import { PdtcounterService } from './pdtcounter.service';

describe('PdtcounterService', () => {
  let service: PdtcounterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PdtcounterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
