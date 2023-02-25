import { Injectable } from '@angular/core';
import { DatabrokerService } from './databroker.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems: any[] = [];
  orderId: number = 0;

  constructor(private databroker: DatabrokerService) {
    databroker.getCart().subscribe({
      next: cart => {
        this.cartItems = cart;
        this.orderId = cart.length ? cart[0].order_id : 0;
      },
      error: error => console.log(`An error occurred: `, error)
    });
  }

  getOrderId(): number {
    if (this.cartItems.length == 0) {
      // console.log('first was called');
      this.databroker.createCart().subscribe({
        next: newOrder => {
          // console.log('new order id => ', newOrder.id);
          this.orderId = newOrder.id;
          return this.orderId;
        }
      })
    } else {
      if (!this.orderId) {
        this.databroker.getCart().subscribe({
          next: data => {
            console.log('expected data from api call => ', data);
            this.orderId = data.sort(
              (a, b) => b.order_id - a.order_id)[0].order_id
  
            return this.orderId;
          },
          error: error => console.log(`An error occurred while fetching cart ${error}`)
        });
      }
    }

    return this.orderId;
  }
}
