import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';       // Import MainComponent
import { ServicesComponent } from './services/services.component';// Import ServicesComponent
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';    // Import AboutComponent

export const routes: Routes = [
  { path: '', component: MainComponent },              // Default route (MainComponent)
  { path: 'services', component: ServicesComponent },  // Services route
  { path: 'contact', component: ContactComponent }, 
  { path: 'about', component: AboutComponent },        // About route
  { path: '**', redirectTo: '' },                      // Redirect invalid paths to home
];
