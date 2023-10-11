import { Component } from '@angular/core';
import { ColleaguesComponent } from '@m11r/colleagues';

@Component({
  standalone: true,
  imports: [ColleaguesComponent],
  selector: 'ng-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'frontend';
}
