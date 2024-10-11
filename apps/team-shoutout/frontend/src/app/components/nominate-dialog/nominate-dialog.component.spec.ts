import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NominateDialogComponent } from './nominate-dialog.component';

describe('NominateDialogComponent', () => {
  let component: NominateDialogComponent;
  let fixture: ComponentFixture<NominateDialogComponent>;

  const testColleague = {
    name: 'test name',
    role: 'test role',
    email: 'test@example.com',
    department: 'test department',
    id: 1,
    imagePath: 'test/path/to/image',
  };
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NominateDialogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NominateDialogComponent);
    component = fixture.componentInstance;

    component.colleague = testColleague;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
