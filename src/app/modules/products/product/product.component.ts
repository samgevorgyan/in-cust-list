import { Component, OnInit, Input } from '@angular/core';
import { ProductInterface } from '../models/product.interface';
import { Router } from '@angular/router';

@Component({
    selector: 'incust-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
    @Input() product: ProductInterface;

    constructor(private router: Router) {}

    ngOnInit() {}
    gotoProduct() {
        /*
         * here we can also use ion-nav because this is just an information page.
         *
         * I used routing in order  to show that can use that :)
         *
         * */

        this.router.navigateByUrl('product/' + this.product.sku, { state: this.product });
    }
}
