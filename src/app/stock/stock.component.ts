import { Component, OnInit } from '@angular/core';
import {StockService} from "../stock.service";
import {Product} from "../product.model";
import {CartService} from "../cart.service";

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {
  stockval:Product[];
  // prod:Product;
  constructor(private sService:StockService,private cService:CartService) { }
  ngOnInit() {
    this.stockval=this.sService.getStock();
  }
  AddtoCart(prod:Product){
    //this.prod=this.stockval[i];
    this.cService.onAddtoCart(prod);
  }
}
