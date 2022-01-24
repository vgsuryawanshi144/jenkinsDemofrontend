import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { Pipe, PipeTransform } from '@angular/core';

import { dirConfig } from './dir.config';

import { RouterConfig, RouterDeclarations } from './router.config';

import { ProductsModel } from './model/products.model';
import { BillingFormModel } from './model/billingformfields.model';
import { CompanyDetailsModel } from './model/companydetails.model';


import { FilterPipe } from './pipes/filter.pipe';
import { SortPipe } from './pipes/sort.pipe';

import { StorageService } from './services/storage.service';
import { CartService } from './services/cart.service';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { BillingComponent } from './pages/billing/billing.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { ProductsComponent } from './pages/products/products.component';
import { BillingCartComponent } from './billing-cart/billing-cart.component';
import { MenuComponent } from './menu/menu.component';
import { ProductListComponent } from './product-list/product-list.component';
import {HttpClientModule} from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, RouterConfig,HttpClientModule],
  declarations: [AppComponent, HelloComponent, dirConfig, RouterDeclarations, FilterPipe, SortPipe, AddToCartComponent, BillingComponent, CheckoutComponent, ProductsComponent, BillingCartComponent, MenuComponent, ProductListComponent, AdminComponent],
  providers: [ProductsModel, BillingFormModel, CompanyDetailsModel, StorageService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
