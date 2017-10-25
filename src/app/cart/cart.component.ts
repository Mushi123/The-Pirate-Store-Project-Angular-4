import { Component, OnInit } from '@angular/core';
import {CartService} from "../cart.service";
import {Product} from "../product.model";
import {Item} from "../item.model";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products:Item[];
  totalcost:number=0;
  disc:number=0;
  qty:number=0;
  constructor(private cService: CartService){}
  ngOnInit() {
  this.products=this.cService.getProds();
  this.cService.productsChanged
      .subscribe(
        (products: Item[]) => {
          this.totalcost=this.cService.returncost();
          this.products = products;
          this.disc=this.cService.returndisc();
          this.qty=this.cService.returntotal();
        }
      );
  }
  onDelete(item:Item){
    this.cService.deleteitem(item);
    this.totalcost=this.cService.returncost();

  }
}
