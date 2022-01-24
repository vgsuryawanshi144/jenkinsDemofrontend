import { RouterModule, Routes } from '@angular/router';

import { ProductsComponent } from './pages/products/products.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { BillingComponent } from './pages/billing/billing.component';
import { APP_BASE_HREF } from '@angular/common';
import { AdminComponent } from './admin/admin.component';

const appRoutes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'billing', component: BillingComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'admin', component: AdminComponent },
  {
    path: '',
    redirectTo: '/products',
    pathMatch: 'full'
  }
]

export const RouterConfig = [
  RouterModule.forRoot(
    appRoutes, {
    enableTracing: false,
    useHash: false
  })

];

export const RouterDeclarations = [ProductsComponent, CheckoutComponent, BillingComponent];


