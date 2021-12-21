import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductsService } from '../products.service';
import { Observable } from 'rxjs';
import { ProductInterface } from '../models/product.interface';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, finalize, tap } from 'rxjs/operators';
import { StorageService } from '../../../shared/services/storage.service';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

@Component({
    selector: 'incust-product-list',
    templateUrl: 'products-list.page.html',
    styleUrls: ['products-list.page.scss']
})
export class ProductsListPage implements OnInit {
    @ViewChild(CdkVirtualScrollViewport) virtualViewPort: CdkVirtualScrollViewport;
    public products$: Observable<ProductInterface[]>;
    searchControl: FormControl;
    searchItem$: Observable<string>;
    constructor(private productService: ProductsService, private storageService: StorageService) {
        this.searchControl = new FormControl();
        this.products$ = this.loadProducts();
    }
    ngOnInit() {
        // if searchItem exist set like default search text
        this.setSearchItemValue();

        // search part
        /**
         * I did not use the search function directly  in component, in order to show that whe can use Observables with async pipe.
         *
         * Instead of that I  created custom pipe, and mixed it with rxjs stream
         */

        this.searchItem$ = this.searchControl.valueChanges.pipe(
            debounceTime(500),
            distinctUntilChanged(),
            tap(searchItem => this.storageService.set('searchItem', searchItem))
        );
    }

    async setSearchItemValue() {
        const lastSearchItem = await this.storageService.get('searchItem');
        if (lastSearchItem) {
            this.searchControl.setValue(lastSearchItem);
        }
    }

    refresh(ev) {
        const gg = this.virtualViewPort.measureScrollOffset();
        if (this.virtualViewPort.measureScrollOffset() < 10) {
            this.loadProducts()
                .pipe(
                    finalize(() => {
                        ev.detail.complete();
                    })
                )
                .subscribe();
        } else {
            ev.detail.complete();
        }
    }

    loadProducts() {
        return this.productService.getProducts();
    }
}
