import { TestBed } from '@angular/core/testing';

import { MenuDonationService } from './menu-donation.service';

describe('MenuDonationService', () => {
  let service: MenuDonationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuDonationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
