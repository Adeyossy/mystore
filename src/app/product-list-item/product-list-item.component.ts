import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Cart, OrderProduct } from '../models/order';
import { Product } from '../models/products';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.css']
})
export class ProductListItemComponent implements OnInit {

  @Input() item: Cart = {} as Cart;
  @Output() emitDelete = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit(): void {
  }

  deleteItem(): void {
    console.log('delete button clicked');
    this.emitDelete.emit(this.item.id);
  }

}
