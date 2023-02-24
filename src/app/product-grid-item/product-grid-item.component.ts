import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../models/products';

@Component({
  selector: 'app-product-grid-item',
  templateUrl: './product-grid-item.component.html',
  styleUrls: ['./product-grid-item.component.css']
})
export class ProductGridItemComponent implements OnInit {

  @Input() item: Product = {} as Product;

  constructor() {
  }

  ngOnInit(): void {
  }

}
