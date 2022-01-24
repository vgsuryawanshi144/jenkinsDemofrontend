import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit {



  ngOnInit(): void {
  }

  constructor(
    public cart: CartService
  ){
    
  }

  
  changeQty(pid,qty,replace){
    if(qty !== ''){
      qty=parseInt(qty) || 1;
      this.cart.addToCart(pid,qty,replace);
    }else{
      this.cart.addToCart(pid,1,replace);
    }
    
  }

  emptyCart(){
    let cartStatus = confirm("Are you sure you want to clear the cart ?");
    if(cartStatus){
      this.cart.emptyCart();
      document.location.href = '/products';
    }
  }


}
