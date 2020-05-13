import { Component, OnInit, Input } from '@angular/core';
import { Categories } from '../models/app.constants';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dropdown-directive',
  templateUrl: './dropdown.directive.view.html'
})
export class DropDownDirectiveComponent implements OnInit {
 categories:Array<any>;
 @Input() parentForm: FormGroup;

  constructor() {
    
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


  
  ngOnInit(): void { }
}
