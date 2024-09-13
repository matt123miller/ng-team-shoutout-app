import { Component, OnInit, signal } from '@angular/core';

import { ColleagueComponent } from '@app/components/colleague/colleague.component';
import { ColleagueDataService } from '@app/services/colleague-data.service';
import { Colleague } from '@app/types/colleague';

@Component({
  standalone: true,
  imports: [ColleagueComponent],
  selector: 'colleagues-list',
  templateUrl: './colleagues-list.component.html',
  styleUrls: ['./colleagues-list.component.scss'],
})
export class ColleaguesListComponent implements OnInit {
  colleagues$ = this.colleagueDataService.getAll().subscribe({
    next: (res) => {
      console.log('ColleaguesListComponent.colleagues$', res);
      this.colleagues.set(res.data);
    },
  });

  colleagues = signal<Colleague[]>([]);

  // I want to implement a text search of the colleagues
  // I found a yt video that covers it (poor audio though)
  // https://www.youtube.com/watch?v=9RWPQ-cx8Uk
  // should extract the search bar into a separate component, maybe a service for the logic?

  constructor(private colleagueDataService: ColleagueDataService) {}

  ngOnInit(): void {
    console.log('ColleaguesListComponent.ngOnInit');
  }

  onInput(event: Event) {
    console.log('ColleaguesListComponent.onInput', event);
  }
}
