import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/app.product';
import { Logic } from '../../models/app.logic';
import { Categories } from '../../models/app.constants';
@Component({
  selector: 'app-product-component',
  templateUrl: './product.view.html'
})
export class ProductComponent implements OnInit {
  product: Product;
  products: Array<Product>;
  dbProducts: Array<Product>;
  private logic: Logic;
  cats = Categories;
  headers: Array<string>;
  productName: string;
  categoryName: string;

  constructor() {
    this.product = new Product(0, '', 0, '');
    this.products = new Array<Product>();
    this.dbProducts = new Array<Product>();
    this.logic = new Logic();
    this.headers  =new Array<string>();
  }
  
  // inoked after the ctor
  // write a performance internsicive code
  // whihc we cannot write in ctor
  ngOnInit(): void {
    this.products = this.logic.getProducts();
    this.dbProducts = this.products;
    // read product Scehma from Product class
    for(let p in this.product) {
      this.headers.push(p);
    }
  }
  clear(): void {
    this.product = new Product(0, '', 0, '');
  }
  save(): void {  
      this.products = this.logic.saveProducts(this.product);
      console.log(JSON.stringify(this.products));
    }
    getSelectedProduct(p: Product): void {
      this.product = Object.assign({}, p);
    }
    
    delete(p:Product):void{
      let index = this.products.findIndex(prd => prd.ProductId === p.ProductId);
      this.products.splice(index, 1);    
    }
    
    sortByProductName(){
      let prds = this.products.sort(this.sortProductName);
      this.products = prds;
    }
    
    reverseProductName(){
      this.products.reverse()
    }
    
    sortProductName(p1: Product, p2:Product){
      if(p1.ProductName > p2.ProductName) return 1;
      else if(p1.ProductName === p2.ProductName) return 0;
      else return -1;
    }

    searchByProductName(){
      let index = this.products.findIndex(prd => prd.ProductName.toLowerCase() === this.productName.toLowerCase());
      this.products = [this.dbProducts[index]];
    }

    searchByCategoryName(){
      let index = this.products.findIndex(prd => prd.Category.toLowerCase() === this.categoryName.toLowerCase());
      this.products = [this.dbProducts[index]]; 
    }

    reset(){
      this.categoryName = "";
      this.productName = "";
      this.products = this.dbProducts;
    }
  }
  