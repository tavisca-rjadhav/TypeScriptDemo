import { Product } from './app.product';
import { Products } from './app.constants';

export class Logic {
  private products: Array<Product>;
  private prds = Products;
  constructor(){
    this.products = new Array<Product>();
    this.prds.forEach((p,i)=> {
      this.products.push(
        new Product(p.ProductId,p.ProductName,p.Price,p.Catgory)
        );
      });
    }
    
    getProducts(): Array<Product> {
      return this.products;
    }
    
    saveProducts(prd: Product): Array<Product> {
      let index = this.products.findIndex(p => p.ProductId === prd.ProductId);
      if(index >= 0){
        this.products[index] = Object.assign({}, prd);       
      }else{
        this.products.push(prd);        
      }
      return this.products;
    }
  }
  