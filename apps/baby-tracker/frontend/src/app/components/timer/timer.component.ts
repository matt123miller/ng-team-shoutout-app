import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'm11r-timer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimerComponent {
  secondsSub!: Subscription;
  seconds$ = new Observable<number>(function subscribe(subscriber) {
    let totalSeconds = 0;
    // Keep track of the interval resource
    const intervalId = setInterval(() => {
      totalSeconds += 1;
      subscriber.next(totalSeconds);
    }, 1000);

    // Provide a way of canceling and disposing the interval resource
    return function unsubscribe() {
      clearInterval(intervalId);
    };
  });

  startTimer = () => {
    this.secondsSub = this.seconds$.subscribe((seconds) => {
      console.log(seconds);
    });
  };

  stopTimer = () => {
    this.secondsSub.unsubscribe();
  };
}
