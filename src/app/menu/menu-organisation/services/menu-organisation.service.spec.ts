import { TestBed } from '@angular/core/testing';

import { MenuOrganisationService } from './menu-organisation.service';

describe('MenuOrganisationService', () => {
  let service: MenuOrganisationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuOrganisationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
