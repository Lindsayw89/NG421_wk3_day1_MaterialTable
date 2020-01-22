import { TestBed } from '@angular/core/testing';

import { BobsBurgersService } from './bobs-burgers.service';

describe('BobsBurgersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BobsBurgersService = TestBed.get(BobsBurgersService);
    expect(service).toBeTruthy();
  });
});
