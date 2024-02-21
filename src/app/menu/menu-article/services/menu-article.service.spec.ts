import { TestBed } from '@angular/core/testing';

import { MenuArticleService } from './menu-article.service';

describe('MenuArticleService', () => {
  let service: MenuArticleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuArticleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
