import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProductsListPage } from './products-list.page';
import { ProductsListRoutingModule } from './product-list-routing.module';
import { ProductComponentModule } from '../product/product.module';
import { SearchByNamePipe } from '../../../shared/pipes/search-by-name.pipe';
import {ScrollingModule} from "@angular/cdk/scrolling";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductComponentModule,
    ProductsListRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ScrollingModule
  ],
  declarations: [ProductsListPage, SearchByNamePipe],
})
export class ProductsListModule {}
