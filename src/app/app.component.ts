import { Component } from '@angular/core';

import { filter } from 'rxjs/operators';
import { Router, NavigationEnd } from '@angular/router';


import { HeaderComponent } from './header/header.component'; 
import { MainComponent } from './main/main.component'; 
import { ServicesComponent } from './services/services.component'; 
import { AboutComponent } from './about/about.component'; 
import { FooterComponent } from './footer/footer.component'; 
import { RouterModule } from '@angular/router'; // Import RouterModule for routing

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule, // Import RouterModule to enable routing
    HeaderComponent, 
    MainComponent,
    ServicesComponent,
    AboutComponent,
    FooterComponent
  ], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 

  constructor(private router: Router) {
    // Listen to route changes and log them
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(event => {
      console.log('Navigation event:', event);
    });
  }
}
