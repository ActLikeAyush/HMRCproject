import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule

interface Card {
  title: string;
  icon: string;
  description: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule], // Add CommonModule to imports
   template: `<h1>Welcome to the Home Page</h1>`,
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  cards: Card[] = [
    {
      title: 'Company Vision',
      icon: 'fa-brands fa-free-code-camp',
      description: 'Offer a glimpse into your company culture and values. Describe what sets your organization apart and what it\'s like to work with or for your company.'
    },
    {
      title: 'Mission Statement',
      icon: 'fa-solid fa-bullseye',
      description: 'We aim to deliver the highest quality products and services to our clients.'
    },
    {
      title: 'Core Values',
      icon: 'fa-solid fa-heart',
      description: 'Integrity, Innovation, and Excellence are at the core of our business.'
    },
    {
      title: 'Core Values',
      icon: 'fa-solid fa-heart',
      description: 'Integrity, Innovation, and Excellence are at the core of our business.'
    }
    // Add more cards as needed
  ];
}

