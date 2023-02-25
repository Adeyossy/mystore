import { Injectable } from '@angular/core';
import { DatabrokerService } from './databroker.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems: any[] = [];

  constructor(private databroker: DatabrokerService) {
    databroker.getCart().subscribe({
      next: cart => {
        this.cartItems = cart;
      },
      error: error => console.log(`An error occurred: `, error)
    });
  }
}
