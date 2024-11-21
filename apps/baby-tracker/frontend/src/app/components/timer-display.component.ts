import { Component, Input } from '@angular/core';

@Component({
  selector: 'm11r-timer-display',
  standalone: true,
  template: ` <div class="timer">{{ time }}</div> `,
})
export class TimerDisplayComponent {
  @Input() time = '00:00:00';
}
