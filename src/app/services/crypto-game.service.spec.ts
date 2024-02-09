import { TestBed } from '@angular/core/testing';

import { CryptoGameService } from './crypto-game.service';

describe('CryptoGameService', () => {
  let service: CryptoGameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CryptoGameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
