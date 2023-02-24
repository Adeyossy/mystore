import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../models/products';

@Component({
  selector: 'app-products-grid',
  templateUrl: './products-grid.component.html',
  styleUrls: ['./products-grid.component.css']
})
export class ProductsGridComponent implements OnInit {

  @Input() items: Product[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  showProductDetails(id: number): void {
    this.router.navigateByUrl(`/products/${id}`)
      .catch(err => alert(`Error navigating ${err}`));
  }

}
