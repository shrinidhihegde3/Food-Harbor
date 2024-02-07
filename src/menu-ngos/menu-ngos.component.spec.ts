import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuNgosComponent } from './menu-ngos.component';

describe('MenuNgosComponent', () => {
  let component: MenuNgosComponent;
  let fixture: ComponentFixture<MenuNgosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuNgosComponent]
    });
    fixture = TestBed.createComponent(MenuNgosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
