import { TestBed } from '@angular/core/testing';

import { MenuProfileMyprofileService } from './menu-profile-myprofile.service';

describe('MenuProfileMyprofileService', () => {
  let service: MenuProfileMyprofileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuProfileMyprofileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
