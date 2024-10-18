import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColleagueDataService } from '@app/services/colleague-data.service';
import { of } from 'rxjs';
import { ColleaguesListComponent } from './colleagues-list.component';

class ColleagueDataServiceMock {
  getAll = () => {
    return of([]);
  };
}

describe('ColleaguesListComponent', () => {
  let component: ColleaguesListComponent;
  let fixture: ComponentFixture<ColleaguesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColleaguesListComponent],
      providers: [
        {
          provide: ColleagueDataService,
          useClass: ColleagueDataServiceMock,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColleaguesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
