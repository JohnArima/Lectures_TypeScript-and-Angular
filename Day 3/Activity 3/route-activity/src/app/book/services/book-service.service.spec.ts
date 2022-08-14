import { TestBed } from '@angular/core/testing';

import { BlogServiceService } from './book-service.service';

describe('BlogServiceService', () => {
  let service: BlogServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
