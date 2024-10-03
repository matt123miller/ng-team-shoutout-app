import { TestBed } from '@angular/core/testing';

import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { ColleagueDataService } from './colleague-data.service';

fdescribe('ColleagueDataService', () => {
  let service: ColleagueDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: HttpClient,
          useValue: jest.fn(() => {
            get: of('');
          }),
        },
      ],
    });
    service = TestBed.inject(ColleagueDataService);
  });

  afterEach(() => {
    // restore the spy created with spyOn
    jest.restoreAllMocks();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
