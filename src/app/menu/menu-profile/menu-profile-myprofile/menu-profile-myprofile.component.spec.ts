import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuProfileMyprofileComponent } from './menu-profile-myprofile.component';

describe('MenuProfileMyprofileComponent', () => {
  let component: MenuProfileMyprofileComponent;
  let fixture: ComponentFixture<MenuProfileMyprofileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuProfileMyprofileComponent]
    });
    fixture = TestBed.createComponent(MenuProfileMyprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
