import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColleagueDataService } from '@app/services/colleague-data.service';
import { of } from 'rxjs';
import { ColleaguesListComponent } from './colleagues-list.component';

describe('ColleaguesListComponent', () => {
  let component: ColleaguesListComponent;
  let fixture: ComponentFixture<ColleaguesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ColleaguesListComponent],
      providers: [
        {
          provide: ColleagueDataService,
          useValue: {
            getAll: () => {
              return of([]);
            },
          },
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
