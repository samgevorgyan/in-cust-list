import { Component } from '@angular/core';


@Component({
  selector: 'incust-product-list',
  templateUrl: 'products-list.page.html',
  styleUrls: ['products-list.page.scss'],
})
export class ProductsListPage {
  constructor() {}

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 1000);
  }



}
