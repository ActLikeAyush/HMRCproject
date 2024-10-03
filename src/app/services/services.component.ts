import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  link: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'] // Corrected this line from styleUrl to styleUrls
})
export class ServicesComponent {
  services: Service[] = [
    {
      id: 1,
      title: 'Web Development',
      description: 'Our team of experienced web developers specializes in creating responsive, user-friendly websites and web applications that engage audiences and deliver results.',
      icon: 'fa-solid fa-laptop-code', // Font Awesome icon
      link: 'service-single.html'
    },
    {
      id: 2,
      title: 'Odoo Services',
      description: 'We specialize in providing Odoo services tailored to meet the needs of our clients. Our team of experts is dedicated to optimizing solutions to streamline business processes.',
      icon: 'fa-solid fa-cogs', // Font Awesome icon
      link: 'service-odoo.html'
    },
    {
      id: 3,
      title: 'Digital Marketing',
      description: 'At HMRC INDUSTRY PRIVATE LIMITED, we understand the critical role digital marketing plays in today\'s competitive landscape. Engage with your target audience.',
      icon: 'fa-solid fa-chart-line', // Font Awesome icon
      link: 'service-digital.html'
    },
    {
      id: 4,
      title: 'Apps Development',
      description: 'We specialize in delivering cutting-edge app development solutions that align with your unique objectives and exceed user expectations.',
      icon: 'fa-solid fa-mobile-alt', // Font Awesome icon
      link: 'service-app.html'
    },
    {
      id: 5,
      title: 'SEO Services',
      description: 'We offer tailored SEO services designed to catapult your brand to the top of search engine results pages (SERPs) and maximize your digital footprint.',
      icon: 'fa-solid fa-search', // Font Awesome icon
      link: 'service-seo.html'
    },
    {
      id: 6,
      title: 'Data Analysis',
      description: 'We offer comprehensive data analysis services tailored to help organizations harness the power of their data and make informed decisions.',
      icon: 'fa-solid fa-database', // Font Awesome icon
      link: 'service-data.html'
    }
  ];
}
