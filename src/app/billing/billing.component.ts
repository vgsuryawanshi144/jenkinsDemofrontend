import { OnInit } from '@angular/core';
import { Component, Input, Output } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { CartService } from '../services/cart.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-billing-details',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {

  public billingForm: any = {};
  public errorsInfo: any = {};
  @Input('billingFields') __billing: any = {};
  public form: FormGroup;
  uploadForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    public storage: StorageService,
    public cart: CartService,
    private formBuilder: FormBuilder,
    private http: HttpClient

  ) {

  }

  ngOnInit() {
    this.loadForm();
    this.uploadForm = this.formBuilder.group({
      profile: ['']
    });
  }

  loadForm() {
    let temp = {};
    let billingInfo = this.cart.loadCheckoutInfo('customerInfo');
    if (billingInfo === undefined || billingInfo === '' || billingInfo === null) {
      billingInfo = {};
    }
    (this.__billing).forEach((item) => {

      temp[item.uid] = [billingInfo[item.uid], item.validation];

    });

    this.billingForm = this.fb.group(temp);

  }


  send() {
    if (this.billingForm.valid) {

      this.storage.set({
        customerInfo: this.billingForm.value
      })
      document.location.href = "/checkout";
    }
  }

  sendToAPI() {
    console.log("this.billingForm.value ", this.billingForm.value);
    if (this.billingForm.valid) {
      this.http.post("http://localhost:8080/customer", this.billingForm.value)
        .subscribe(
          data => console.log("success!", data),
          error => console.error("couldn't post because", error)
        );
      this.storage.set({
        customerInfo: this.billingForm.value
      })
      document.location.href = "/checkout";
    }
  }


}
