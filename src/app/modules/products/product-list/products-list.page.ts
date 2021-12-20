import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Observable } from 'rxjs';
import { ProductInterface } from '../models/product.interface';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';

@Component({
  selector: 'incust-product-list',
  templateUrl: 'products-list.page.html',
  styleUrls: ['products-list.page.scss'],
})
export class ProductsListPage implements OnInit {
  public $products: Observable<ProductInterface[]>;
  searchControl: FormControl;
  searchItem$: Observable<string>;
  constructor(private productService: ProductsService) {
    this.searchControl = new FormControl();
    this.loadProducts();
  }
  ngOnInit() {
    /**
     * I did not use the search function directly  in component, in order to show that whe can use Observables.
     *
     * Instead of that I  created custom pipe, and mixed it with rxjs stream
     */

    this.searchItem$ = this.searchControl.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged()
    );
  }
  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 1000);
  }

  loadProducts() {
    this.$products = this.productService.getProducts();
  }
}
