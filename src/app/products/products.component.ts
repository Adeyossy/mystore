import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { DatabrokerService } from '../databroker.service';
import { Product } from '../models/products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {

  products: Product[] = []
  unsubscribe: Subscription = new Subscription();
  
  constructor(private databroker: DatabrokerService) { }

  ngOnInit(): void {
    this.unsubscribe = this.databroker.getProducts().subscribe({
      next: (data: Product[]) => this.products = data,
      error: error => { throw new Error(`An error occurred: ${error}`); }
    });
  }

  ngOnDestroy(): void {
      this.unsubscribe.unsubscribe();
  }

}
