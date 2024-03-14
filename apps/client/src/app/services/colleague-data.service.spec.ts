import { TestBed } from '@angular/core/testing';

import { ColleagueDataService } from './colleague-data.service';

describe('ColleagueDataService', () => {
  let service: ColleagueDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColleagueDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
