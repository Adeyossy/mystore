import { Component, OnInit, OnDestroy, DoCheck } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { DatabrokerService } from '../databroker.service';
import { Cart, Order, OrderProduct } from '../models/order';
import { Product } from '../models/products';
import { Card, User } from '../models/user';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, DoCheck, OnDestroy {

  cartItems: Cart[] = [];
  unsubscribe = new Subscription();
  total: number = 0;
  hasCheckedOut = false;
  user: User = {} as User;
  card: Card = {} as Card;

  constructor(private databroker: DatabrokerService) { }

  ngOnInit(): void {
    this.unsubscribe = this.databroker.getCart().subscribe({
      next: cartItems => {
        this.cartItems = cartItems;
      },
      error: err => console.log('An error occurred => ', err)
    });
  }

  ngDoCheck(): void {
    if (this.cartItems.length) {
      this.calculateTotal();
    }
  }

  deleteCartItem(id: number): void {
    console.log('deletion event reach parent');
    this.cartItems = this.cartItems.filter(item => item.id !== id);
  }

  ngOnDestroy(): void {
    this.unsubscribe.unsubscribe();
  }

  calculateTotal(): void {
    this.total = this.cartItems.reduce((prev, current) => {
      const pairTotal = (prev.price * prev.quantity) + (current.price * current.quantity);
      const newCart = Object.create(prev);
      newCart.price = pairTotal;
      return newCart;
    }).price;
  }

  handleCheckout(): void {
    this.hasCheckedOut = true;
  }

  handlePayment(userform: NgForm, cardform: NgForm): void {
    // console.log('user controls => ', userform.controls);
    this.user.firstname = userform.controls['firstname'].value;
    this.user.lastname = userform.controls['lastname'].value;
    this.user.address = userform.controls['address'].value;
    
    this.card.cardname = cardform.controls['cardname'].value;
    this.card.cardnumber = cardform.controls['cardnumber'].value;
    this.card.expiry = cardform.controls['expiry'].value;
    this.card.cvv = cardform.controls['cvv'].value;
  }
}
