import { Component, OnInit, Inject } from '@angular/core';
import { Product, Total } from '../../models/product';
import { ActivatedRoute, Router } from '@angular/router';
import { parse } from 'url';
import { PRODUCTS } from '../../models/products';
import {MatBottomSheet, MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA} from '@angular/material';
import { SalesOrder } from '../../models/salesorder';
import { Data } from '../../data';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(private router:Router,private route: ActivatedRoute,private bottomSheetRef: MatBottomSheetRef<ProductDetailComponent>, @Inject(MAT_BOTTOM_SHEET_DATA) public data: any,private data1:Data) {}

  // openLink(event: MouseEvent): void {
  //   this.bottomSheetRef.dismiss();
  //   event.preventDefault();
  // }
products:Array<Product>=[];

quantity:number=1;
total:number;
salesorder:SalesOrder;
add(product:Product){
   if(product.quantity>=1){
    product.quantity++;
    this.salesorder.total=this.salesorder.total+1*product.price
   }
   
    

 
}
minus(product:Product){
  
  if(product.quantity>1){
    product.quantity--;
      this.salesorder.total=this.salesorder.total-1*product.price;
  }
 }
 checkout(){
  this.data1.storage = this.salesorder;
 
  var product='product';
  this.router.navigate(['checkout',product]);
  //this.bottomSheetRef.dismiss();
 }
 delete(product:Product){
  for (var i = this.salesorder.product1.length; i--;) {
    if (this.salesorder.product1[i] === product) {
      this.salesorder.total=this.salesorder.total-product.price*product.quantity;
      this.salesorder.product1.splice(i, 1);
    }
  }
  
  }
  ngOnInit() {
 this.salesorder=this.data;
this.products= this.salesorder.product1;
    // this.options=PRODUCTS;
    // let name=this.route.snapshot.paramMap.get('productName');
    // this.name=name;
    // this.options.forEach(element => {
    //   if(element.productName==this.name){
    //     this.product=element;
    //     console.log(this.product);
    //   }
    // });
  }

}
