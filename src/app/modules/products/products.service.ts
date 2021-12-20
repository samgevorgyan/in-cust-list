import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UrlsEnum } from '../../shared/enums/urls.enum';
import { ProductInterface } from './models/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  public getProducts(): Observable<ProductInterface[]> {
    return this.http.get<ProductInterface[]>(UrlsEnum.getproducts);
  }
}
