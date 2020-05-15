import { Component, OnInit } from '@angular/core';
import { Product } from '../models/app.product';
import { Logic } from '../models/app.logic';

@Component({
  selector: 'app-table-element-component',
  templateUrl: './app.tableelements.component.html'
})

export class TableElementComponent implements OnInit {
  products: Array<Product>
  
  constructor(){
      let logic = new Logic();
      this.products = logic.getProducts();
  }


  ngOnInit() { }
}
