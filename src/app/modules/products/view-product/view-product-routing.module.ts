import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewProductPage } from './view-product.page';
import { ProductInterface } from '../models/product.interface';

const routes: Routes = [
    {
        path: '',
        component: ViewProductPage,
        data: {}
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ViewProductPageRoutingModule {}
