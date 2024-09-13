import { Component } from '@angular/core';
import { ColleaguesListComponent } from '@app/components/colleagues-list/colleagues-list.component';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, ColleaguesListComponent],
  selector: 'm11r-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'client';
}
