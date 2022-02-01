import { TestBed } from '@angular/core/testing';

import { DispatchingService } from './dispatching.service';

describe('DispatchingService', () => {
  let service: DispatchingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DispatchingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
