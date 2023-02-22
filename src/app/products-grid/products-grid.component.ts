import { Component, OnInit } from '@angular/core';
import { Product } from '../models/products';

@Component({
  selector: 'app-products-grid',
  templateUrl: './products-grid.component.html',
  styleUrls: ['./products-grid.component.css']
})
export class ProductsGridComponent implements OnInit {

  items: Product[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
