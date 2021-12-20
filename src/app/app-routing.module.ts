import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'product-list',
    loadChildren: () => import('./product-list/product-list.module').then(m => m.ProductsListModule)
  },
  {
    path: 'product/:id',
    loadChildren: () => import('./view-product/view-product.module').then(m => m.ViewMessagePageModule)
  },
  {
    path: '',
    redirectTo: 'product-list',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'product-list',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
