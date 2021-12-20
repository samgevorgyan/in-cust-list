import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { ProductsListPage } from './products-list.page';
import { ProductsListRoutingModule } from './product-list-routing.module';
import { ProductComponentModule} from '../product/product.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductComponentModule,
    ProductsListRoutingModule
  ],
  declarations: [ProductsListPage]
})
export class ProductsListModule {}
