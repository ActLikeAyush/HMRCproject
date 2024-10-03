import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule], // Add CommonModule here
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isScrolled = false;

  // HostListener to detect scroll event
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 80; // Check if the user has scrolled more than 80px
  }
   
  isModalOpen = false;

  // Detect scrolling
  onScroll(event: Event) {
    this.isScrolled = window.scrollY > 0;
  }

  openSignupModal() {
    this.isModalOpen = true;
  }

  closeSignupModal() {
    this.isModalOpen = false;
  }
}
