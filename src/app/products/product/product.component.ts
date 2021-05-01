import { Component, OnInit, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Product, Total } from '../../models/product';
import { PRODUCTS } from '../../models/products';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { MatBottomSheet, MatDialog, MatSnackBar } from '@angular/material';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { trigger, style, transition, animate, keyframes, query, stagger, state } from '@angular/animations';
import { fade, listAnimation, explainerAnim, myAwesomeAnimation, fade1, fade2 } from '../../animate';
import { SalesOrder } from '../../models/salesorder';
import { CheckOutComponent } from '../check-out/check-out.component';
import { Data } from '../../data';
@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css'],
    animations: [
        listAnimation,
        explainerAnim,
        myAwesomeAnimation,
        fade,
        fade1,
        fade2
    ]
})
export class ProductComponent implements OnInit {
    name: string;
    constructor(private router: Router, private route: ActivatedRoute, private bottomSheet: MatBottomSheet, public dialog: MatDialog, private data: Data, private snackbar: MatSnackBar) {
        this.salesorder = new SalesOrder();
        this.salesorder.total = 0;
        this.salesorder.product1 = [];

    }
    myControl = new FormControl();
    options1 = PRODUCTS;
    options = PRODUCTS;
    productname: string;
    oneproduct: boolean;
    product: Product
    Allproduct: boolean = true;
    title: boolean;
    Allproduct_3grid: boolean;
    Allproduct_4grid: boolean;
    Allproduct_5grid: boolean;
    public salesorder: SalesOrder;
    checkout: boolean;
    products: Array<Product> = [];
    filteredOptions: Observable<Product[]>;
    openBottomSheet(): void {
        this.bottomSheet.open(ProductDetailComponent, {
            data: this.salesorder
        });
    }
    state: string = 'fadeIn';
    state1: string = 'fadeIn';
    state2: string = 'fadeIn';
    state3: string = 'fadeIn';
    state4: string = 'fadeIn';
    state5: string = 'fadeIn';
    state6: string = 'fadeIn';
    state7: string = 'fadeIn';
    continue1: string;

    productClick(product: Product) {
        this.continue1 = this.route.snapshot.params['shopping'];
        //this.state=(this.state === 'small'?'large':'small');
        if (this.continue1 === "continueshoping") {
            this.product = product
            this.oneproduct = true;
            this.Allproduct = false;
            this.Allproduct_4grid = false;
            this.Allproduct_5grid = false;
            this.Allproduct_3grid = false;
            this.title = false;
        } else {
            this.product = product
            this.oneproduct = true;
            this.Allproduct = false;
            this.Allproduct_4grid = false;
            this.Allproduct_5grid = false;
            this.Allproduct_3grid = false;
            this.title = false;
        }


        //this.router.navigate(['/product',product.productName]);
    }

    //  bigImg(event) {
    //   event.preventDefault();
    //   event.target.style.height = "60px";
    //   event.target.style.width = "60px";

    // }

    // normalImg(event) {
    //   event.preventDefault();
    //   event.target.style.height = "32px";
    //   event.target.style.width = "32px";

    // }
    onGrid3() {
        this.Allproduct_3grid = true;
        this.Allproduct_4grid = false;
        this.Allproduct_5grid = false;
        this.Allproduct = false;
        this.title = false;
        this.oneproduct = false;
    }
    onGrid4() {
        this.Allproduct_4grid = true;
        this.Allproduct = false;
        this.Allproduct_3grid = false;
        this.Allproduct_5grid = false;
        this.title = false;
        this.oneproduct = false;
    }
    onGrid5() {
        this.Allproduct_5grid = true;
        this.Allproduct_4grid = false;
        this.Allproduct = false;
        this.title = false;
        this.Allproduct_3grid = false;
        this.oneproduct = false;
    }
    mouseout() {
        this.state = (this.state === 'fadeIn' ? 'fadeOut' : 'fadeIn');
    }
    mouseover() {
        this.state = (this.state === 'fadeIn' ? 'fadeOut' : 'fadeIn');
    }
    mouseout1() {
        this.state1 = (this.state1 === 'fadeIn' ? 'fadeOut' : 'fadeIn');
    }
    mouseover1() {
        this.state1 = (this.state1 === 'fadeIn' ? 'fadeOut' : 'fadeIn');
    }
    mouseout2() {
        this.state2 = (this.state2 === 'fadeIn' ? 'fadeOut' : 'fadeIn');
    }
    mouseover2() {
        this.state2 = (this.state2 === 'fadeIn' ? 'fadeOut' : 'fadeIn');
    }
    mouseout3() {
        this.state3 = (this.state3 === 'fadeIn' ? 'fadeOut' : 'fadeIn');
    }
    mouseover3() {
        this.state3 = (this.state3 === 'fadeIn' ? 'fadeOut' : 'fadeIn');
    }
    mouseout4() {
        this.state4 = (this.state4 === 'fadeIn' ? 'fadeOut' : 'fadeIn');
    }
    mouseover4() {
        this.state4 = (this.state4 === 'fadeIn' ? 'fadeOut' : 'fadeIn');
    }
    mouseout5() {
        this.state5 = (this.state5 === 'fadeIn' ? 'fadeOut' : 'fadeIn');
    }
    mouseover5() {
        this.state5 = (this.state5 === 'fadeIn' ? 'fadeOut' : 'fadeIn');
    }
    mouseout6() {
        this.state6 = (this.state6 === 'fadeIn' ? 'fadeOut' : 'fadeIn');
    }
    mouseover6() {
        this.state6 = (this.state6 === 'fadeIn' ? 'fadeOut' : 'fadeIn');
    }
    mouseout7() {
        this.state7 = (this.state7 === 'fadeIn' ? 'fadeOut' : 'fadeIn');
    }
    mouseover7() {
        this.state7 = (this.state7 === 'fadeIn' ? 'fadeOut' : 'fadeIn');
    }
    ontitle() {
        this.title = true;
        this.Allproduct = false;
        this.Allproduct_5grid = false;
        this.Allproduct_4grid = false;
        this.Allproduct_3grid = false;
        this.oneproduct = false;
    }
    panelOpenState = false;
    mode = new FormControl('over');
    total: number = 0;
    quantity: number;
    price: number;
    product1: string;
    productcount = 0;
    addcart(product: Product) {
        this.salesorder.product1.forEach(element => {

            if (element.productName == product.productName) {
                this.product1 = product.productName;

            }

        });
        if (this.product1 != product.productName) {
            this.checkout = true;
            this.salesorder.id = 1;
            this.salesorder.product1.push(product);
            product.total = product.quantity * product.price;
            this.salesorder.total = this.salesorder.total + product.total;
        } else {
            this.snackbar.open("product already added", "", {
                duration: 2000,
            });
        }


    }
    onchange() {
    }
    continueshopping() {
        this.Allproduct = true;
        this.oneproduct = false;
        this.Allproduct_5grid = false;
        this.Allproduct_4grid = false;
        this.Allproduct_3grid = false;
        this.title = false;
        this.checkout = false;
        this.router.navigate(['product', { shopping: "continueshoping" }]);
    }
    onSelectionChange(event, product: Product) {
        if (event.isUserInput) {
            this.product = product
            this.Allproduct = false;
            this.oneproduct = true;
            this.Allproduct_5grid = false;
            this.Allproduct_4grid = false;
            this.Allproduct_3grid = false;
            this.title = false;
            // this.router.navigate(['/product',product.productName]);
        }
        // this.options=[];
        // this.options1.forEach(element => {
        //   if(element.productName==this.productname){
        //     this.options.push(element);
        //   }
        // });
        // if(this.productname==""){
        //   this.options=this.options1;
        // }


    }
    openDialog() {
        this.data.storage = this.salesorder;

        this.router.navigate(['checkout'])

    }

    onGold() {
        this.Allproduct = true;
        this.oneproduct = false;
        this.Allproduct_5grid = false;
        this.Allproduct_4grid = false;
        this.Allproduct_3grid = false;
        this.title = false;
        this.options = [];
        this.options1.forEach(element => {

            if (element.productId == "Gold") {

                this.options.push(element);
            }

        });
    }
    onDiamond() {
        this.Allproduct = true;
        this.oneproduct = false;
        this.Allproduct_5grid = false;
        this.Allproduct_4grid = false;
        this.Allproduct_3grid = false;
        this.title = false;
        this.options = [];
        this.options1.forEach(element => {
            if (element.productId == "Diamond") {

                this.options.push(element);
            }

        });
    }
    onSilver() {
        this.Allproduct = true;
        this.oneproduct = false;
        this.Allproduct_5grid = false;
        this.Allproduct_4grid = false;
        this.Allproduct_3grid = false;
        this.title = false;
        this.options = [];
        this.options1.forEach(element => {
            if (element.productId == "Silver") {

                this.options.push(element);
            }

        });
    }
    onAll() {
        this.Allproduct = true;
        this.oneproduct = false;
        this.Allproduct_5grid = false;
        this.Allproduct_4grid = false;
        this.Allproduct_3grid = false;
        this.title = false;
        this.options = [];
        this.options1.forEach(element => {
            this.options.push(element);


        });
    }
    total1: number;
    update: boolean;
    add: boolean = true;
    continue: boolean = true;
    updatecart(product: Product) {

        for (var i = this.salesorder.product1.length; i--;) {
            if (this.salesorder.product1[i] === product) {
                this.salesorder.product1.splice(i, 1);
                var total = this.quantity * this.price;
                this.salesorder.total = this.salesorder.total - total;
            }
        }
        this.salesorder.product1.push(product);
        this.salesorder.total = this.salesorder.total + product.quantity * product.price;
        this.data.storage = this.salesorder;

        this.router.navigate(['checkout'])
    }
    hide: boolean = true;
    ngOnInit() {
        this.name = this.route.snapshot.params['productName'];
        this.total1 = this.route.snapshot.params['total'];
        this.options1.forEach(element => {
            if (element.productName == this.name) {
                this.update = true;
                this.add = false;
                this.continue = false;
                this.salesorder = this.data.storage;
                this.salesorder.total = this.total1;
                this.hide = false;
                for (var i = this.salesorder.product1.length; i--;) {
                    if (this.salesorder.product1[i].productName === this.name) {
                        this.quantity = this.salesorder.product1[i].quantity;
                        this.price = this.salesorder.product1[i].price;

                    }
                }
                this.product = element;
                this.oneproduct = true;
                this.Allproduct = false;
                this.Allproduct_5grid = false;
                this.Allproduct_4grid = false;
                this.Allproduct_3grid = false;
                this.title = false;
            }


        });

        this.filteredOptions = this.myControl.valueChanges.pipe(
            startWith(''),
            map(value => this.filter(value))
        );
    }
    private filter(value: any): any[] {
        const filterValue = value.toLowerCase();

        return this.options.filter(option => option.productName.toLowerCase().indexOf(filterValue) === 0);
    }
}

