import { TestBed, inject } from '@angular/core/testing';

import { HoglogService } from './hoglog.service';

describe('HoglogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HoglogService]
    });
  });

  it('should be created', inject([HoglogService], (service: HoglogService) => {
    expect(service).toBeTruthy();
  }));
});
