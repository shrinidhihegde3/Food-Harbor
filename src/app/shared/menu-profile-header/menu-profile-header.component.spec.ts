import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuProfileHeaderComponent } from './menu-profile-header.component';

describe('MenuProfileHeaderComponent', () => {
  let component: MenuProfileHeaderComponent;
  let fixture: ComponentFixture<MenuProfileHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuProfileHeaderComponent]
    });
    fixture = TestBed.createComponent(MenuProfileHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
