import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  login=false;
  isCartOpen = false;
  toggleCart() {
    this.isCartOpen = !this.isCartOpen;
    console.log('Cart is open:', this.isCartOpen); // Log the current state
  }
}
