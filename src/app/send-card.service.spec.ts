import { TestBed } from '@angular/core/testing';

import { SendCardService } from './send-card.service';
import { HttpClientModule } from '@angular/common/http';

describe('SendCardService', () => {
  beforeEach(() => TestBed.configureTestingModule({
  	imports: [
       HttpClientModule
     ],
  }));

  it('should be created', () => {
    const service: SendCardService = TestBed.get(SendCardService);
    expect(service).toBeTruthy();
  });
});
