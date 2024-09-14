import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { HomepageComponent } from './pages/homepage.component';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AppComponent,
    HomepageComponent,
  ],
  providers: [],
  bootstrap: [],
})
export class AppModule {}
