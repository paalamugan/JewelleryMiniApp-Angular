import { Component, OnInit, Inject } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA, MAT_DIALOG_DATA } from '@angular/material';
import { ProductComponent } from '../product/product.component';
import { SalesOrder } from '../../models/salesorder';
import { ActivatedRoute, Router,} from '@angular/router';
import { Data } from '../../data';
import { Product } from '../../models/product';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {

  //constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }
  salesorder:SalesOrder;
  name:string;
  contact:boolean=true;
  constructor(private route: ActivatedRoute,private router: Router,private data: Data){
  }

  ngOnInit() {
    this.name=this.route.snapshot.paramMap.get('product');
  
    if(this.name==='product'){
      this.salesorder=this.data.storage;
      console.log("one",this.name);
      this.contact=false;
    }else{
      this.salesorder=this.data.storage;
      console.log("two",this.name);
    }
    
  }

edit(product:Product){
  this.data.storage=this.salesorder;
  this.router.navigate(['/product',product.productName,{total:this.salesorder.total}])
}
  delete(product:Product){
    for (var i = this.salesorder.product1.length; i--;) {
      if (this.salesorder.product1[i] === product) {
        this.salesorder.total=this.salesorder.total-product.price*product.quantity;
        this.salesorder.product1.splice(i, 1);
      }
    }
    
    }
}
