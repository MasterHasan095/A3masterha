import { TestBed } from '@angular/core/testing';

import { MasterhaService } from './masterha.service';

describe('MasterhaService', () => {
  let service: MasterhaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MasterhaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
