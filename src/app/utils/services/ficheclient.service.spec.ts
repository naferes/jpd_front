import { TestBed } from '@angular/core/testing';

import { FicheclientService } from './ficheclient.service';

describe('FicheclientService', () => {
  let service: FicheclientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FicheclientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
