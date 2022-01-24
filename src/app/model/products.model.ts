import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';

@Injectable()
export class ProductsModel{
  public data : any = [
    {
      p_id : '1',
      product_name : 'LPG Gas',
      product_weight : '100Kg',
      product_price : '1590',
      product_brand : 'BHARAT GAS',
      product_type : 'LPG',
      product_image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScCYmyRews6ELbCBL1TP38QD0k0gceG_6lRQ&usqp=CAU',
      product_expiray:12/12/12
    },
    {
      p_id : '2',
      product_name : 'CNG Gas',
      product_weight : '20kg',
      product_price : '380',
      product_brand : 'BHARAT GAS',
      product_type : 'CNG',
      product_image : 'https://cdn2.vectorstock.com/i/1000x1000/97/66/creative-gas-cylinder-tank-vector-22529766.jpg' ,
      product_expiray:12/12/12
      },
    {
      p_id : '3',
      product_name : 'Oxygen Gas',
      product_weight : '10kg',
      product_price : '190',
      product_brand : 'BHARAT GAS',
      product_type : 'Oxygen',
      product_image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9PzXWx3rutTOlItcywWuEbkO0IOgwhgBJBA&usqp=CAU'  ,
      product_expiray:12/12/12
      },
    {
      p_id : '4',
      product_name : 'Hydrogen Gas',
      product_weight : '40kg',
      product_price : '280',
      product_brand : 'BHARAT GAS',
      product_type : 'Hydrogen',
      product_image : 'https://media.istockphoto.com/photos/orange-lpg-tanks-picture-id1058728340?k=6&m=1058728340&s=612x612&w=0&h=o0lHKUyATtTRrG9dXU5lRxONCt2xYzAafLAK0j8_mYY='  ,
      product_expiray:12/12/12
      },
    {
      p_id : '5',
      product_name : 'Propane Gas',
      product_weight : '50Kg',
      product_price : '175',
      product_brand : 'BHARAT GAS',
      product_type : 'GREEN',
      product_image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShzpEBKCsXAPyfAhJg1hHdC7pudWp_9YU4Wg&usqp=CAU'  ,
      product_expiray:12/12/12
     },
    {
      p_id : '6',
      product_name : 'Methyl Gas',
      product_weight : '200kg',
      product_price : '180',
      product_brand : 'BHARAT GAS',
      product_type : 'LPG',
      product_image : 'https://i.pinimg.com/736x/18/8b/bf/188bbf43f7e04013ab50915305a0b652.jpg'   ,
      product_expiray:12/12/12
     },
    {
      p_id : '7',
      product_name : 'Methene',
      product_weight : '200kg',
      product_price : '240',
      product_brand : 'BHARAT GAS',
      product_type : 'LPG',
      product_image : 'https://www.kindpng.com/picc/m/553-5538448_gas-cylinder-png-photo-lpg-gas-cylinder-png.png'  ,
      product_expiray:12/12/12
      },
    {
      p_id : '8',
      product_name : 'BIO Gas',
      product_weight : '250kg',
      product_price : '235',
      product_brand : 'BHARAT GAS',
      product_type : 'LPG',
      product_image : 'https://static.yellowimages.com/wp-content/uploads/2016/12/14956-preview-02-5863c0b9a6e8b.jpg'  ,
      product_expiray:12/12/12
      },
    {
      p_id : '9',
      product_name : 'CarbonDiOxide',
      product_weight : '250Kg',
      product_price : '293',
      product_brand : 'BHARAT GAS',
      product_type : 'LPG',
      product_image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5ygkZX9TTVLjRt275aRNHMDSX_yw0ZtFwvQ&usqp=CAU'   ,
      product_expiray:12/12/12
     }
  ]
} 