import {Component} from '@angular/core';
import { CommunicationService } from 'src/app/service/app.communicationservice.service';

@Component({
    selector:"app-search-component",
    template:`
    <hr/>
    <div class="container">
    <h2>Search</h2>
        <div class="col-md-8">
            <div class="input-group">
                <input type="text" class="form-control" placeholder="City Name" aria-label="City Name" aria-describedby="basic-addon2" [(ngModel)]="cityName" name="cityName">
                <div class="input-group-append">
                <button class="btn btn-outline-secondary" type="button" (click)="searchByCityName()" >Search</button>
                <button class="btn btn-outline-secondary" type="button" (click)="reset()" >Reset</button>                
                </div>
                <span style="margin-right:50px;"></span>
                <input type="text" class="form-control" placeholder="Customer Name" aria-label="Customer Name" aria-describedby="basic-addon2" [(ngModel)]="customerName" name="customerName">
                <div class="input-group-append">
                <button class="btn btn-outline-secondary" type="button" (click)="searchByCustomerName()" >Search</button>
                <button class="btn btn-outline-secondary" type="button" (click)="reset()" >Reset</button>
                </div>
            </div>
        </div>
    </div>
    `
})

export class SearchComponent{
    cityName: string;
    customerName:string;
    resetValue: string = undefined;
    constructor(private commServ: CommunicationService){


    }

    searchByCityName(){
        console.log(this.cityName)
        this.resetValue = undefined;
        this.commServ.onReset(this.resetValue);
        this.commServ.onCustomerNameEmit(undefined);
        this.commServ.onCityEmit(this.cityName);
    }

    searchByCustomerName(){
        console.log(this.customerName);
        this.resetValue = undefined;
        this.commServ.onReset(this.resetValue);
        this.commServ.onCityEmit(undefined);
        this.commServ.onCustomerNameEmit(this.customerName);
    }

    reset(){
        this.cityName = undefined;
        this.customerName = undefined;
        this.resetValue = "";
        this.commServ.onReset(this.resetValue);
    }
}