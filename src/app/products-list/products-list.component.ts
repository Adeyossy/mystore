import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Cart } from '../models/order';
import { Product } from '../models/products';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  @Input() items: Cart[] = []
  @Output() emitDelete = new EventEmitter();
  total: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  passDeleteToParent(id: number): void {
    console.log('deletion event passed to intermediary');
    this.emitDelete.emit(id);
  }
}
