import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { Colleague } from '@app/types/colleague';
import { firstValueFrom } from 'rxjs';
import { ColleagueDataService } from './colleague-data.service';

fdescribe('ColleagueDataService', () => {
  let service: ColleagueDataService;
  let httpTesting: HttpTestingController;

  const testColleagues: Colleague[] = [
    {
      id: 1,
      name: 'name',
      department: 'department',
      role: 'role',
      email: 'email',
      imagePath: 'imagePath',
    },
    {
      id: 2,
      name: 'name',
      department: 'department',
      role: 'role',
      email: 'email',
      imagePath: 'imagePath',
    },
    {
      id: 3,
      name: 'name',
      department: 'department',
      role: 'role',
      email: 'email',
      imagePath: 'imagePath',
    }
  ]

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),    
        provideHttpClientTesting(),
      ],
    });
    service = TestBed.inject(ColleagueDataService);
    httpTesting = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    // restore the spy created with spyOn
    jest.restoreAllMocks();
      // Verify that none of the tests make any extra HTTP requests.
      TestBed.inject(HttpTestingController).verify();
  });

  

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all colleagues', async () => {

    const getColleagues$ = service.getAll();
    const getColleaguesPromise = firstValueFrom(getColleagues$);

    const req = httpTesting.expectOne('/api/colleagues');

    req.flush(testColleagues);

    expect(await getColleaguesPromise).toEqual(testColleagues);

  });
});
