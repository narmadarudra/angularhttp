import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductsModel } from './products';

@Injectable()
export class ProductsService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<ProductsModel> {
    const baseURL = 'https://jsonplaceholder.typicode.com/posts';
    return this.http.get<ProductsModel>(baseURL);
  }
}
