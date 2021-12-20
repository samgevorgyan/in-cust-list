import { Component, OnInit, Input } from '@angular/core';
import { ProductInterface } from '../models/product.interface';

@Component({
  selector: 'incust-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() product: ProductInterface;

  constructor() {}

  ngOnInit() {}

  isIos() {
    const win = window as any;
    return win && win.Ionic && win.Ionic.mode === 'ios';
  }
}
