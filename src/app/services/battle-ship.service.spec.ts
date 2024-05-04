import { TestBed } from '@angular/core/testing';

import { BattleShipService } from './battle-ship.service';

describe('BattleShipService', () => {
  let service: BattleShipService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BattleShipService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
