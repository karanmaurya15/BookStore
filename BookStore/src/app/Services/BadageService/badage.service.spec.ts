import { TestBed } from '@angular/core/testing';

import { BadageService } from './badage.service';

describe('BadageService', () => {
  let service: BadageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BadageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
