import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuProfileDonationHistoryComponent } from './menu-profile-donation-history.component';

describe('MenuProfileDonationHistoryComponent', () => {
  let component: MenuProfileDonationHistoryComponent;
  let fixture: ComponentFixture<MenuProfileDonationHistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuProfileDonationHistoryComponent]
    });
    fixture = TestBed.createComponent(MenuProfileDonationHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
