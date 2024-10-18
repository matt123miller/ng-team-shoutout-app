import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component } from '@angular/core';
import { AppComponent } from './app.component';
import { ColleaguesListComponent } from './components/colleagues-list/colleagues-list.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, ColleaguesListComponent],
    }).overrideComponent(ColleaguesListComponent, {
      remove: { imports: [ColleaguesListComponent] },
      add: { imports: [ColleageListStubComponent] },
    });
    fixture = TestBed.createComponent(AppComponent);
    fixture.autoDetectChanges();
  });

  it('should render title', () => {
    // const fixture = TestBed.createComponent(AppComponent);
    // fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain(
      'Welcome to app'
    );
  });

  // it(`should have as title 'app'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   expect(app.title).toEqual('app');
  // });
});

@Component({ standalone: true, selector: 'colleagues-list', template: '' })
class ColleageListStubComponent {}
