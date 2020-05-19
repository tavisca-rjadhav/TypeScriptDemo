import { Directive, ElementRef, Renderer2, Input, HostListener } from '@angular/core';
import { HttpService } from '../service/app.httpservice.service';


@Directive({
  selector: '[checkProductId]'
})
export class ProductIdDirective {
   constructor(private ele: ElementRef, private renderer: Renderer2, private service: HttpService){
   }

   @Input('checkProductId') productId: string;

   // logic for directive
   private checkProductId(productId: string): boolean {
    var flag = false;
    this.service.get().subscribe((data) => {
      console.log(!data.find(x=>x.ProductId == productId))
      if(!data.find(x=>x.ProductId.toLowerCase() == productId.toLowerCase()))
        this.renderer.setStyle(this.ele.nativeElement, "border-color", "red");
      else
      this.renderer.setStyle(this.ele.nativeElement, "border-color", "black");
   }, (error) => {
     console.log(`error in response ${error}`);
   });
   return flag;
   }

   @HostListener('blur')
   onblur(): void {
      this.checkProductId(this.productId);   }
  }
