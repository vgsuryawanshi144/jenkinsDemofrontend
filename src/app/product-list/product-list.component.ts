import { Component, Input, Output, EventEmitter,OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { StorageService } from '../services/storage.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(
    public storage: StorageService,
    public cart: CartService
  ){

  }

  @Input("allProductList") __allprdts: any = {};
  @Input("searchedText") __searchedProduct: string='';
  @Input("sortingBy") sortByOption: string='';
  
  @Output() refresh:EventEmitter<string> = new EventEmitter(); 

  ngOnInit(){
    this.sortByOption = 'product_name';
  }
  addToCart(productId,productQty){    
    this.cart.allItems = this.__allprdts;
    this.cart.addToCart(productId,productQty,'');
    this.refresh.emit("true");
  }

}
