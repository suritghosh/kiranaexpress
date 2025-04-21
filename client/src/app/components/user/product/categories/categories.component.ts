import { Component } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {

  images = [
    'assets/photos/carousel-1.png',
    'assets/photos/carousel-2.png',
    'assets/photos/carousel-3.jpg'
  ];
  
  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000
  };
    
} 
