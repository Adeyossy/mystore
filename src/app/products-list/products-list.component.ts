import { Component, OnInit } from '@angular/core';
import { Product } from '../models/products';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  items: Product[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
