import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuDonationComponent } from './menu-donation.component';

describe('MenuDonationComponent', () => {
  let component: MenuDonationComponent;
  let fixture: ComponentFixture<MenuDonationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuDonationComponent]
    });
    fixture = TestBed.createComponent(MenuDonationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
