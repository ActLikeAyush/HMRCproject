import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component'; // Import HeaderComponent
import { MainComponent } from './main/main.component'; // Import MainComponent
  

@Component({
  selector: 'app-root',
  standalone: true,                        // Ensure this is set for standalone components
  imports: [HeaderComponent, MainComponent], // Add MainComponent to imports
  templateUrl: './app.component.html',      // Link to HTML file
  styleUrls: ['./app.component.css']        // Link to CSS file
})
export class AppComponent { }
