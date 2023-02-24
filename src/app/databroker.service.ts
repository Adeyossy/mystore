import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './models/products';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabrokerService {
  backend_url = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${this.backend_url}/products`);
  }
}
