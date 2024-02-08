import { TestBed } from '@angular/core/testing';

import { MenuProfileCreditsService } from './menu-profile-credits.service';

describe('MenuProfileCreditsService', () => {
  let service: MenuProfileCreditsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuProfileCreditsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
