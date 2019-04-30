import { TestBed, inject } from '@angular/core/testing';

import { WelcomeServiceService } from './welcome-service.service';

describe('WelcomeServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WelcomeServiceService]
    });
  });

  it('should be created', inject([WelcomeServiceService], (service: WelcomeServiceService) => {
    expect(service).toBeTruthy();
  }));
});
