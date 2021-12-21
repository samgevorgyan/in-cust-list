import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewProductPage } from './view-product.page';

import { IonicModule } from '@ionic/angular';

import { ViewProductPageRoutingModule } from './view-product-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ViewProductPageRoutingModule,
        ReactiveFormsModule
    ],
    declarations: [ViewProductPage]
})
export class ViewMessagePageModule {}
