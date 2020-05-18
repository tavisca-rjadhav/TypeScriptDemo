import { Injectable, EventEmitter } from '@angular/core';

@Injectable(
    {
        providedIn: 'root'
      }
)
export class CommunicationService{

   // emitValue: EventEmitter<number>;
    emitArrayValue: EventEmitter<Array<number>>;
    cityNameEmit: EventEmitter<string>;
    customerNameEmit: EventEmitter<string>;
    reset: EventEmitter<string>;

    constructor(){
    //   this.emitValue = new EventEmitter<number>();
       this.cityNameEmit = new EventEmitter<string>();
       this.emitArrayValue = new EventEmitter<Array<number>>();
       this.customerNameEmit = new EventEmitter<string>();
       this.reset = new EventEmitter<string>();
    }

    // onEmitValue(data: number): void {
    //     this.emitValue.emit(data);
    // }

    onCityEmit(data: string): void {
        this.cityNameEmit.emit(data);
    }

    onCustomerNameEmit(data: string): void {
        this.customerNameEmit.emit(data);
    }

    onArrayNumberEmit(data: Array<number>):void{
        this.emitArrayValue.emit(data);
    }

    onReset(data: string):void{
        this.reset.emit(data)
    }


}