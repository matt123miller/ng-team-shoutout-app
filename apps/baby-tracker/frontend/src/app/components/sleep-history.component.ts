import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SleepService } from '../services/sleep.service';

@Component({
  selector: 'm11r-sleep-history',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="history">
      <h2>Sleep History</h2>
      <div class="history-item" *ngFor="let record of sleepRecords$ | async">
        <div>
          <strong>{{ record.startTime | date: 'MMM d, y, h:mm a' }}</strong>
          <br />
          Duration: {{ record.duration }}
        </div>
      </div>
    </div>
  `,
})
export class SleepHistoryComponent {
  sleepRecords$ = this.sleepService.sleepRecords$;

  constructor(private sleepService: SleepService) {}
}
