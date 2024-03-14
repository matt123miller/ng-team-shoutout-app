import { Component, OnInit } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ColleagueDataService } from '@app/services/colleague-data.service';
import { Colleague } from '@app/types/colleague';
import { Observable, filter } from 'rxjs';
import { ColleagueComponent } from '../colleague/colleague.component';

@Component({
  standalone: true,
  imports: [ColleagueComponent],
  selector: 'colleagues-list',
  templateUrl: './colleagues-list.component.html',
  styleUrls: ['./colleagues-list.component.scss'],
})
export class ColleaguesListComponent implements OnInit {
  colleagues$: Observable<Colleague[]> =
    this.colleagueDataService.colleagues$.pipe(
      filter((colleagues) => !!colleagues)
    );

  colleagues = toSignal(this.colleagues$, { initialValue: [] });

  // I want to implement a text search of the colleagues
  // I found a yt video that covers it (poor audio though)
  // https://www.youtube.com/watch?v=9RWPQ-cx8Uk
  // should extract the search bar into a separate component, maybe a service for the logic?

  constructor(private colleagueDataService: ColleagueDataService) {
    // this.colleagues$ =
  }

  ngOnInit(): void {
    console.log('ColleaguesListComponent.ngOnInit');
  }

  onInput(event: Event) {
    console.log('ColleaguesListComponent.onInput', event);
  }
}
