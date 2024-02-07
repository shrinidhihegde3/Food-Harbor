import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuOrganisationsComponent } from './menu-organisations.component';

describe('MenuOrganisationsComponent', () => {
  let component: MenuOrganisationsComponent;
  let fixture: ComponentFixture<MenuOrganisationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuOrganisationsComponent]
    });
    fixture = TestBed.createComponent(MenuOrganisationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
