import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuOrganisationComponent } from './menu-organisation.component';

describe('MenuOrganisationComponent', () => {
  let component: MenuOrganisationComponent;
  let fixture: ComponentFixture<MenuOrganisationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuOrganisationComponent]
    });
    fixture = TestBed.createComponent(MenuOrganisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
