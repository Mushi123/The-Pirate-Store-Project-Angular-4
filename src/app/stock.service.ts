import {Product} from './product.model'
export class StockService{
public stock:Product[]=[new Product("Star Wars Episode IV DVD",20),new Product("Star Wars Episode V DVD",20),new Product("Star Wars Episode VI DVD",20),
  new Product("Star Wars Episode IV Blu-Ray",25),new Product("Star Wars Episode V Blu-Ray",25),new Product("Star Wars Episode VI Blu-Ray",25)];

getStock(){
  return this.stock.slice();
}

}
