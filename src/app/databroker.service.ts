import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from './models/products';
import { Observable } from 'rxjs';
import { Order, OrderProduct } from './models/order';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class DatabrokerService {
  backend_url = 'http://localhost:3000';

  // token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwidXNlcm5hbWUiOiJ1c2VyIiwiaWF0IjoxNjc3MzA3NzkyfQ.-uKfCJom49wg9uE-qQm3HswAHVa4FpLGWEbH6xzpGcA";
  token = "";
  user_id = 0;
  hasDataChanged = false;
  user = {
    username: 'user',
    password: 'password'
  }

  postOptions = {
    headers: {
      Authorization: `Bearer ${this.token}`
    }
  }

  constructor(private httpClient: HttpClient,
    private jwtHelper: JwtHelperService) {
  }

  login(user: any): Observable<string> {
    // this.httpClient.post(`${this.backend_url}/users/login`, this.user).subscribe({
    //   next: token => {
    //     console.log('logged in');
    //     this.token = token.toString();
    //     this.user_id = this.jwtHelper.decodeToken(token.toString()).id;
    //     console.log('user_id => ', this.user_id);
    //     return true;
    //   },
    //   error: err => {
    //     console.log(`Error on logging in => ${err}`);
    //     this.signup();
    //   }
    // });
    return this.httpClient.post<string>(`${this.backend_url}/users/login`, user);
  }

  signup(user: any): Observable<string> {
    // this.httpClient.post(`${this.backend_url}/users/signup`, this.user, this.postOptions).
    //   subscribe({
    //     next: token => {
    //       console.log('signed up');
    //       this.token = token.toString();
    //       this.user_id = this.jwtHelper.decodeToken(token.toString()).id;
    //       return true;
    //     },
    //     error: err => alert(`error signing up: ${err}`)
    //   });
    return this.httpClient.post<string>(`${this.backend_url}/users/signup`, user, this.postOptions);
  }

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

  notifyChange(isChanged: boolean): void {
    this.hasDataChanged = isChanged;
  }

  setTokenInAuthorization(token: string): void {
    this.postOptions = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  }
}
