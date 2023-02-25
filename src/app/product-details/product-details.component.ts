import { Component, OnInit } from '@angular/core';
import { DatabrokerService } from '../databroker.service';
import { Product } from '../models/products';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product = {id: 0, name: '', price: 0, category: ''};
  products: Product[] = [];
  quantity: number = 0;
  pairings: Product[] = [];

  constructor(private databroker: DatabrokerService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {
    }

  ngOnInit(): void {
    this.activatedRoute.url.subscribe((segments) => {
      console.log('parameters => ', segments[0].path);
      this.databroker.getProducts().subscribe({
        next: (data) => {
          this.product = <Product>data.find(item => 
            item.id === parseInt(segments[segments.length - 1].toString())),
          this.products = data;
          this.setPairings();
        },
        error: (error) => alert(`Error getting product: ${error}`),
        complete: () => console.log(`Product successfully retrieved`)
      });
    });    
  }

  goToProduct(id: number) {
    this.router.navigateByUrl(`/products/${id}`);
  }

  setPairings(): void {
    console.log('category => ', this.product.category);
    if (this.product.category === 'Beverage') {
      this.pairings = this.products.filter(item => item.category === 'Food');
    } else {
      this.pairings = this.products.filter(item => item.category === 'Beverage');
    }
  }

  addToCart(): void {
    alert('Add item to cart?');
    this.databroker.getCart()
  }

}
