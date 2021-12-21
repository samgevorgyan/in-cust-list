import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductInterface } from '../models/product.interface';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { StorageService } from '../../../shared/services/storage.service';
import { Browser } from '@capacitor/browser';

@Component({
    selector: 'incust-view-product',
    templateUrl: './view-product.page.html',
    styleUrls: ['./view-product.page.scss']
})
export class ViewProductPage implements OnInit, OnDestroy {
    product: ProductInterface;
    subscription: Subscription = new Subscription();
    // Forms
    amountQtyForm: FormGroup;

    constructor(
        private router: Router,
        private fb: FormBuilder,
        private storageService: StorageService
    ) {
        this.product = this.router.getCurrentNavigation()?.extras.state as ProductInterface;
        if (this.product) {
            this.saveProduct();
        } else {
            this.getProduct();
        }
    }

    get amount() {
        return this.amountQtyForm.get('amount');
    }
    get quantity() {
        return this.amountQtyForm.get('quantity');
    }
    ngOnInit() {
        this.amountQtyForm = this.fb.group({
            amount: [],
            quantity: []
        });

        /*
         * this is the input valueChanges approach
         *
         * */

        // this.subscription.add(
        //     this.amount.valueChanges
        //         .pipe(debounceTime(200), distinctUntilChanged())
        //         .subscribe(amount => {
        //             if (amount) {
        //                 this.quantity.setValue(amount / this.product.price);
        //             } else {
        //                 this.quantity.reset();
        //             }
        //         })
        // );
        // this.subscription.add(
        //     this.quantity.valueChanges
        //         .pipe(debounceTime(200), distinctUntilChanged())
        //         .subscribe(quantity => {
        //             if (quantity) {
        //                 this.amount.setValue(quantity * this.product.price);
        //             } else {
        //                 this.amount.reset();
        //             }
        //         })
        // );
    }

    /*
     *
     *  this is the keyup approach
     * */

    setQuantity(value) {
        if (value) {
            this.quantity.setValue(value / this.product.price);
        } else {
            this.quantity.reset();
        }
    }
    setAmount(value) {
        this.amount.setValue(value * this.product.price);
    }
    setAmountByClick(amount) {
        this.amount.setValue(amount);
        this.quantity.setValue(amount / this.product.price);
    }
    setQuantityByClick(quantity) {
        this.quantity.setValue(quantity);
        this.amount.setValue(quantity * this.product.price);
    }

    /*end of calculation*/

    saveProduct() {
        this.storageService.set('product', this.product);
    }
    async getProduct() {
        const product = await this.storageService.get('product');
        if (product) {
            this.product = product;
        }
    }

    openInAppBrowser(url) {
        Browser.open({ url });
    }
    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
