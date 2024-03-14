import { Component, OnInit } from '@angular/core';
import { ColleagueDataService } from '@app/services/colleague-data.service';
import { Colleague } from '@app/types/colleague';
import { ColleagueComponent } from '../colleague/colleague.component';

@Component({
  standalone: true,
  imports: [ColleagueComponent],
  selector: 'colleagues-list',
  templateUrl: './colleagues-list.component.html',
  styleUrls: ['./colleagues-list.component.scss'],
})
export class ColleaguesListComponent implements OnInit {
  colleagues: Colleague[];

  constructor(private colleagueDataService: ColleagueDataService) {
    this.colleagues = colleagueDataService.getColleagues();
  }

  ngOnInit(): void {
    console.log(this.colleagues);
  }
}
