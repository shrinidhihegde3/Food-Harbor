import { TestBed } from '@angular/core/testing';

import { MenuProfileDonationHistoryService } from './menu-profile-donation-history.service';

describe('MenuProfileDonationHistoryService', () => {
  let service: MenuProfileDonationHistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuProfileDonationHistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
