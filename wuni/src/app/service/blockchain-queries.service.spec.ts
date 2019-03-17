import { TestBed } from '@angular/core/testing';

import { BlockchainQueriesService } from './blockchain-queries.service';

describe('BlockchainQueriesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BlockchainQueriesService = TestBed.get(BlockchainQueriesService);
    expect(service).toBeTruthy();
  });
});
