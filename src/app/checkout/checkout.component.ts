import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../services/cart.service';
import { StorageService } from '../services/storage.service';
import { CompanyDetailsModel } from '../model/companydetails.model';
import { HttpClient } from '@angular/common/http';
 
@Component({
  selector: 'app-checkout-details',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  public companyDetails: any = {};
  public customerDetails: any = {};
  public checkOutFlag: any = {};
  public invoiceDate: any = new Date();
  public invoiceNo: any = Math.floor(Math.random() * 10000);

  @Input("allProductList") __allprdts: any = {};

  constructor(
    public cart: CartService,
    public storage: StorageService,
    public company: CompanyDetailsModel,
    private http: HttpClient
  ) {

  }

  ngOnInit() {
    this.customerDetails = this.cart.loadCheckoutInfo('customerInfo');
    this.companyDetails = this.company.companyInfo;
    this.cart.allItems = this.__allprdts;
    this.cart.listCartItems();
    this.checkOutFlag = JSON.parse(this.storage.get('mycart'));

  }
  clearCart() {
    let temp = {};
    localStorage.setItem(this.storage.storageName, JSON.stringify(temp));

    //this.checkOutFlag = Object.keys(this.storage.get()).length;
    //console.log(this.checkOutFlag)
    document.location.href = '/products';
  }

  print() {
    let temp = {};
    localStorage.setItem(this.storage.storageName, JSON.stringify(temp));
    window.focus();
    window.print();
  }

  placeOrder() {
   let orderStruture = {
      "customerDetails":  this.customerDetails,
      "orderDetails":this.cart.cartItemsList,
      "orderTotal":this.cart.cartTotal,
      "orderNumber":this.invoiceNo,
      "orderDate":this.invoiceDate
    };

    this.http.post("http://localhost:8080/order",orderStruture)
    .subscribe(
      data => console.log("success!", data),
      error => console.error("couldn't post because", error)
    );

  }

}
