import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-billing-cart',
  templateUrl: './billing-cart.component.html',
  styleUrls: ['./billing-cart.component.css']
})
export class BillingCartComponent implements OnInit {

   
  constructor(
    public cart: CartService
  ){
    
  }

  ngOnInit(): void {
  }

}
