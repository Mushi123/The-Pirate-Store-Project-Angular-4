import {Product} from './product.model';
import {EventEmitter} from "@angular/core";
import {Item} from './item.model';
export class CartService{
  public pricedict={
    "Star Wars Episode IV DVD": 20,
    "Star Wars Episode V DVD": 20,
    "Star Wars Episode VI DVD": 20,
    "Star Wars Episode IV Blu-Ray": 25,
    "Star Wars Episode V Blu-Ray": 25,
    "Star Wars Episode VI Blu-Ray": 25
};
  private cost:number=0;
  private disc:number=0;
  private savings:number=0;
  private total:number=0;
  productsChanged = new EventEmitter<Item[]>();
  public dictionary = {
  };
 public prods:Item[]=[];
 extradisc(){
   if(this.total>=100){
     var newsavings=this.cost*0.05;
     this.savings+=newsavings;
     this.cost-=this.cost*0.05;
   }
 }
 returntotal(){
   return this.total;
 }
 gettotal() {
   this.total=0;
   for (var key of Object.keys(this.dictionary)) {
     var value = this.dictionary[key];
     this.total+=value;
  }
 }
 returndisc(){
   return this.savings;
 }
 returncost(){
   return this.cost;
 }
  getProds() {
    this.prods.splice(0, this.prods.length);
    for (var key of Object.keys(this.dictionary)) {
      var value = this.dictionary[key];
      var i: Item;
      var i = new Item(key, value);
      this.prods.push(i);
    }
    return this.prods.slice();
  }
  getDiscount(){
   if(this.dictionary["Star Wars Episode IV DVD"]!=undefined&&this.dictionary["Star Wars Episode V DVD"]!=undefined
      &&this.dictionary["Star Wars Episode VI DVD"]!=undefined){
     // first=true;
     var num=this.dictionary["Star Wars Episode IV DVD"];
     num+=this.dictionary["Star Wars Episode V DVD"];
     num+=this.dictionary["Star Wars Episode VI DVD"];
     var curcost:number=0;
     curcost+=num*20;
     this.savings+=curcost*0.1;
   }
    if(this.dictionary["Star Wars Episode IV Blu-Ray"]!=undefined&&this.dictionary["Star Wars Episode V Blu-Ray"]!=undefined
      &&this.dictionary["Star Wars Episode VI Blu-Ray"]!=undefined){
      var num=this.dictionary["Star Wars Episode IV Blu-Ray"];
      num+=this.dictionary["Star Wars Episode V Blu-Ray"];
      num+=this.dictionary["Star Wars Episode VI Blu-Ray"];
      console.log(num);
      var curcost:number=0;
      curcost+=num*25;
      this.savings+=curcost*0.15;
    }
  }
  getcost() {
    this.cost=0;
    for (var key of Object.keys(this.dictionary)) {
      var value = this.dictionary[key];
      this.cost+=value*this.pricedict[key];
    }
  }
  newcost(){
    this.cost=this.cost-this.savings;
  }
  deleteitem(item:Item){
    this.savings=0;
    this.dictionary[item.name]-=1;
    if(this.dictionary[item.name]==0){
      delete this.dictionary[item.name];
    }
    var newprod:Item[];
    newprod=this.getProds();
    this.getcost();
    this.gettotal();
    this.getDiscount();
    this.newcost();
    this.extradisc();


    this.productsChanged.emit(newprod);
  }

   onAddtoCart(product: Product) {
    this.savings=0;
    if(this.dictionary[product.name]!=undefined){
      this.dictionary[product.name]+=1;
    }
    else{
      this.dictionary[product.name]=1;
    }
    var newprod:Item[];
    newprod=this.getProds();
     this.getcost();
     this.gettotal();
     this.getDiscount();
     this.newcost();
     this.extradisc();


    this.productsChanged.emit(newprod);
  }
}
