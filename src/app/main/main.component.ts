import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-main',
  standalone: true,
  templateUrl: './main.component.html',
    template: `<h1>Main Component</h1>`,
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  isInView = false; // Flag to track if the element is in view

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event): void {
    const windowHeight = window.innerHeight; // Height of the viewport
    const element = document.querySelector('.mainText'); // Get the element to animate
    const element2=document.querySelector('img');
    const elementPosition2=element!.getBoundingClientRect().top;
    const elementPosition = element!.getBoundingClientRect().top; // Position of the element

    if(elementPosition2<windowHeight){
      this.isInView=true;
    }
    else{
      this.isInView=false;
    }
    // Check if the element is in view
    if (elementPosition < windowHeight) {
      this.isInView = true;
    } else {
      this.isInView = false;
    }
  }

  onMouseMove(event: MouseEvent): void {
    const image = event.target as HTMLElement;
    const { clientX, clientY } = event;
    const { offsetWidth, offsetHeight } = image;

    const moveX = ((clientX / window.innerWidth) * 60) - (offsetWidth / 25); // Adjust movement factor as needed
    const moveY = ((clientY / window.innerHeight) * 60) - (offsetHeight / 25);

    image.style.transform = `translate(${moveX}px, ${moveY}px)`;
  }
}
