import { TestBed } from '@angular/core/testing';

import { StockmarketService } from './stockmarket.service';

describe('StockmarketService', () => {
  let service: StockmarketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StockmarketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
