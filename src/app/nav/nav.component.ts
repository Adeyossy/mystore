import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  cartItems: any[] = this.cartService.cartItems;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

}
