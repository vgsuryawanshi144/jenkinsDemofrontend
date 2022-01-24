import { Component, OnInit } from '@angular/core';
import { BillingFormModel } from '../../model/billingformfields.model';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {
  public cartflag:boolean= false;

  constructor( public billing:BillingFormModel) { }    
      ngOnInit(){
        this.ref();
      }
      ref(){
        this.cartflag = false;
        setTimeout( () => {
            this.cartflag = true;
        }, 10 )
      }

}
