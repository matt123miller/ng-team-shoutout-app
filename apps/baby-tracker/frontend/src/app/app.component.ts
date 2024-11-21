import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SleepHistoryComponent } from './components/sleep-history.component';
import { TimerDisplayComponent } from './components/timer-display.component';
import { SleepService } from './services/sleep.service';
import { formatDuration } from './utils/time.utils';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    TimerDisplayComponent,
    SleepHistoryComponent,
  ],
  selector: 'm11r-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit, OnDestroy {
  isTracking = false;
  currentTimer = '00:00:00';
  private timerInterval?: number;
  private startTime: Date | null = null;

  constructor(private sleepService: SleepService) {}

  ngOnInit() {
    console.log('init');
  }

  ngOnDestroy() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }
  }

  startTracking() {
    this.isTracking = true;
    this.startTime = new Date();
    this.timerInterval = window.setInterval(() => {
      this.updateTimer();
    }, 1000);
  }

  stopTracking() {
    if (this.startTime) {
      const endTime = new Date();
      const duration = formatDuration(
        endTime.getTime() - this.startTime.getTime()
      );

      this.sleepService.addRecord({
        id: Date.now(),
        startTime: this.startTime,
        endTime: endTime,
        duration,
      });
    }

    this.isTracking = false;
    this.currentTimer = '00:00:00';
    this.startTime = null;
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }
  }

  private updateTimer() {
    if (this.startTime) {
      const currentTime = new Date();
      const diff = currentTime.getTime() - this.startTime.getTime();
      this.currentTimer = formatDuration(diff);
    }
  }
}
