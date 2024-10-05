import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common'; // Make sure to import this for ngClass
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule], // Add CommonModule and RouterModule here
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isModalOpen: boolean = false;

  isScrolled = false;

  // HostListener to detect scroll event
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 80; // Check if the user has scrolled more than 80px
  }

  openSignupModal() {
    this.isModalOpen = true;
  }

  closeSignupModal() {
    this.isModalOpen = false;
  }
}
