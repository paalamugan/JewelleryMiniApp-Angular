import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './products/product/product.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { CheckOutComponent } from './products/check-out/check-out.component';
import { SalesOrder } from './models/salesorder';

var salesorder: SalesOrder;
const routes: Routes = [
    {
        path: '', redirectTo: 'product', pathMatch: 'full'
    },
    {
        path: 'product',
        component: ProductComponent
    },
    {
        path: 'product/:productName',
        component: ProductComponent
    },
    {
        path: 'checkout',
        component: CheckOutComponent,
    },
    {
        path: 'checkout/:product',
        component: CheckOutComponent,
    },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingcomponents = []