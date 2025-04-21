// import { Component } from '@angular/core';
// import { MatDialog } from '@angular/material/dialog';
// import { DialogComponent } from '../../common/element/dialog/dialog.component';
// import { LoginComponent } from '../../common/page/login/login.component';

// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.css'],
// })
// export class HomeComponent {
//   constructor(public dialog: MatDialog) {}

//   login = false;
//   isCartOpen = false;
//   toggleCart() {
//     this.isCartOpen = !this.isCartOpen;
//     console.log('Cart is open:', this.isCartOpen); // Log the current state
//   }
//   openDialog() {
//     this.dialog.open(LoginComponent);
//   }
// }

//uncomment this when testing

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../../common/page/login/login.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  login = false; // This can later be tied to actual authentication status.
  isCartOpen = false;

  ngOnInit() {
    // Open the dialog when the component initializes.
    // setTimeout(() => {
    //   this.openDialog();
    // });
  }

  toggleCart() {
    this.isCartOpen = !this.isCartOpen;
    console.log('Cart is open:', this.isCartOpen); // Log the current state
  }

  openDialog() {
    this.dialog.open(LoginComponent);
  }
}