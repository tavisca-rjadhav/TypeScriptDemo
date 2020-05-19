import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productid-directive-component',
  template:` Search Product Id
    <input type="text" value="" [checkProductId]="productId" [(ngModel)]="productId"/>
    <hr/>

  `

})
export class ProductIdDirectiveComponent implements OnInit {
  productId: string;
  constructor() {
    this.productId = '';
  }

  ngOnInit(): void { }
}
