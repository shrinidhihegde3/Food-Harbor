import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuArticleComponent } from './menu-article.component';

describe('MenuArticleComponent', () => {
  let component: MenuArticleComponent;
  let fixture: ComponentFixture<MenuArticleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuArticleComponent]
    });
    fixture = TestBed.createComponent(MenuArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
