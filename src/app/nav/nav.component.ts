import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from '../cart.service';
import { DatabrokerService } from '../databroker.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit, OnDestroy {

  @Input() cartItems: any[] = this.cartService.cartItems;

  constructor(private cartService: CartService,
    private databroker: DatabrokerService) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

}
