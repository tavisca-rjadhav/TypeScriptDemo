import { AbstractControl, ValidatorFn } from '@angular/forms';
import { Product } from 'src/app/models/app.product';
import { Logic } from 'src/app/models/app.logic';

// custom validator class must contain static metyhod
export class MyCustomValidator {
  // if the method is validated
  // then it will return null
  // else it will retun JSON object for
  // invalidation
  // AbstractControl --> represents HTML UI element
  // on which the validations are applied
  static checkEven(ctrl: AbstractControl) : any {
     const val: number  = parseInt(ctrl.value);
     if (val % 2 === 0) {
        return null;
     } else {
       return {noteven:true}
     }
  }

  static isUnique(ctrl: AbstractControl) : any {
    let logic = new Logic();
    let prods =  logic.getProducts()
    if (prods.find(x=>x.ProductId == ctrl.value)) {
      return { 'isvalidid': true };
  }
  return null;
 } 

  
static checkUpperCase(ctrol: AbstractControl) : any {
  if(ctrol.value != "" && ctrol.value[0]!== ctrol.value[0].toUpperCase())
    return { "firstletteruppercase": true};

  return null;
 
}

  
}
