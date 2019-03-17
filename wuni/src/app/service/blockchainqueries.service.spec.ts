import { TestBed } from '@angular/core/testing';

import { BlockchainqueriesService } from './blockchainqueries.service';

describe('BlockchainqueriesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BlockchainqueriesService = TestBed.get(BlockchainqueriesService);
    expect(service).toBeTruthy();
  });
});
