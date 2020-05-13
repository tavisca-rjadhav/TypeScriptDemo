import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Categories } from '../models/app.constants';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-dropdown-directive',
  templateUrl: './dropdown.directive.view.html'
})
export class DropDownDirectiveComponent implements OnInit {
 categories:Array<any>;
 @Input() parentForm: FormGroup;
 @Output() selectedCategory: EventEmitter<any>;
selectedCat:string = "Select";

  constructor() {
    this.selectedCategory = new EventEmitter();
  }

  @Input()
  set Categories(val: Array<any>) {
     if(val.length > 0) {
       this.categories = val;
      
     } else {
      this.categories = new Array<any>();
     }
  }

  get Categories(): Array<any> {
    return this.categories;
  }

  categorySelected(e){
      this.selectedCat = e.target.value;
      console.log(e.target.value);
      this.selectedCategory.emit(e);
  }
  
  ngOnInit(): void { }
}
