import { TestBed } from '@angular/core/testing';

import { TendaService } from './tenda.service';

describe('TendaService', () => {
  let service: TendaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TendaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
