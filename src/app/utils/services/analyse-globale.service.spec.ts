import { TestBed } from '@angular/core/testing';

import { AnalyseGlobaleService } from './analyse-globale.service';

describe('AnalyseGlobaleService', () => {
  let service: AnalyseGlobaleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnalyseGlobaleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
