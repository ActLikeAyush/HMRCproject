import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config'; // Assuming routes are provided here
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
