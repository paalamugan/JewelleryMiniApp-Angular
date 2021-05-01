import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule, routingcomponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from '@angular/cdk/layout';
import {
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatChipsModule,
    MatCheckboxModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatNativeDateModule,
    MatTableModule,
    MatDialogModule,
    MatDatepickerModule,
} from '@angular/material';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './main/main.component';
import { ProductComponent } from './products/product/product.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { CheckOutComponent } from './products/check-out/check-out.component';
import { Data } from './data';

@NgModule({
    declarations: [
        AppComponent,
        routingcomponents,
        MainComponent,
        ProductComponent,
        ProductDetailComponent,
        CheckOutComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FlexLayoutModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        LayoutModule,
        HttpClientModule,
        MatAutocompleteModule,
        MatExpansionModule,
        MatButtonModule,
        MatBottomSheetModule,
        MatButtonToggleModule,
        MatCardModule,
        MatChipsModule,
        MatCheckboxModule,
        MatGridListModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatRippleModule,
        MatSelectModule,
        MatSidenavModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatSnackBarModule,
        MatTabsModule,
        MatToolbarModule,
        MatTooltipModule,
        MatNativeDateModule,
        MatTableModule,
        MatDialogModule,
        MatDatepickerModule,
        MatBottomSheetModule
    ],
    providers: [Data],
    entryComponents: [ProductDetailComponent, CheckOutComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
