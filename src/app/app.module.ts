import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { StockComponent } from './stock/stock.component';
import { CartComponent } from './cart/cart.component';
import { StockItemComponent } from './stock/stock-item/stock-item.component';
import { CartItemComponent } from './cart/cart-item/cart-item.component';
import {StockService} from "./stock.service";
import {CartService} from "./cart.service";



@NgModule({
  declarations: [
    AppComponent,
    StockComponent,
    CartComponent,
    StockItemComponent,
    CartItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [StockService,CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
