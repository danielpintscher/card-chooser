import { TestBed } from '@angular/core/testing';

import { SendCardService } from './send-card.service';

describe('SendCardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SendCardService = TestBed.get(SendCardService);
    expect(service).toBeTruthy();
  });
});
