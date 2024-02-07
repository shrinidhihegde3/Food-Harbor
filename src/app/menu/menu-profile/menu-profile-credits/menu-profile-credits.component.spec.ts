import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuProfileCreditsComponent } from './menu-profile-credits.component';

describe('MenuProfileCreditsComponent', () => {
  let component: MenuProfileCreditsComponent;
  let fixture: ComponentFixture<MenuProfileCreditsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuProfileCreditsComponent]
    });
    fixture = TestBed.createComponent(MenuProfileCreditsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
