import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Colleague } from '@app/types/colleague';
import { ColleagueComponent } from './colleague.component';

describe('ColleagueComponent', () => {
  let component: ColleagueComponent;
  let fixture: ComponentFixture<ColleagueComponent>;

  const testColleague: Colleague = {
    name: 'Matt Miller',
    department: 'department',
    role: 'developer',
    email: 'test@abc.com',
    id: 1,
    imagePath: '/image/1.png',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColleagueComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ColleagueComponent);
    component = fixture.componentInstance;
    component.colleague = testColleague;
    fixture.detectChanges();
  });

  // beforeEach(() => {

  // });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
