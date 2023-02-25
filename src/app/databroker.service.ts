import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from './models/products';
import { Observable } from 'rxjs';
import { Order, OrderProduct } from './models/order';

@Injectable({
  providedIn: 'root'
})
export class DatabrokerService {
  backend_url = 'http://localhost:3000';

  token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwidXNlcm5hbWUiOiJ1c2VyIiwiaWF0IjoxNjc3MzA3NzkyfQ.-uKfCJom49wg9uE-qQm3HswAHVa4FpLGWEbH6xzpGcA";
  user_id = 2;
  hasDataChanged = false;

  postOptions = {
    headers: {
      Authorization: `Bearer ${this.token}`
    }
  }

  constructor(private httpClient: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${this.backend_url}/products`);
  }

  createCart(): Observable<Order> {
    return this.httpClient.post<Order>(`${this.backend_url}/orders/${this.user_id}`, {}, this.postOptions);
  }

  getCart(): Observable<any[]> {
    // this.httpClient.post('/users/signup', { username: 'user', password: 'password' })
    return this.httpClient.get<any[]>(`${this.backend_url}/orders/${this.user_id}`, this.postOptions);
  }

  addToCart(cartDetails: OrderProduct): Observable<OrderProduct> {
    return this.httpClient.post<OrderProduct>(`${this.backend_url}/orders/${cartDetails.orderId}/products`, cartDetails, this.postOptions);
  }

  notifyChange(isChanged: boolean): void{
    this.hasDataChanged = isChanged;
  }
}
