import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomepageComponent } from './pages/homepage.component';

@Component({
  standalone: true,
  selector: 'm11r-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [HomepageComponent, RouterModule],
})
export class AppComponent {
  title = 'material-lab';
}
