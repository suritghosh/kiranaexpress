import { Component } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent {
  quantity = 1;

  increaseQty() {
    this.quantity++;
  }
  
  decreaseQty() {
    if (this.quantity > 1) this.quantity--;
  }
  
}
