import { Component, OnInit } from '@angular/core';
import { ProductInterface } from '../models/product.interface';
import { Router } from '@angular/router';

@Component({
    selector: 'incust-view-product',
    templateUrl: './view-product.page.html',
    styleUrls: ['./view-product.page.scss']
})
export class ViewProductPage implements OnInit {
    product: ProductInterface;
    constructor(private router: Router) {
        this.product = this.router.getCurrentNavigation().extras.state as ProductInterface;
    }

    ngOnInit() {}

    getBackButtonText() {
        const win = window as any;
        const mode = win && win.Ionic && win.Ionic.mode;
        return mode === 'ios' ? 'Inbox' : '';
    }
}
