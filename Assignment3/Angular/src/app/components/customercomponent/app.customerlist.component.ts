import {Component, OnInit, OnChanges, SimpleChanges} from '@angular/core'
import { Customer } from 'src/app/models/app.customer'
import { Customers } from 'src/app/models/app.constants'
import { CommunicationService } from 'src/app/service/app.communicationservice.service'

@Component({
    selector:"app-customerlist-component",
    template:`
    <hr/>
    <div class="container">
    <h2> Customer List</h2>
    <table class="table table-striped table-bordered table-dark">
        <thead>
            <tr>
                <th>CustomerId</th>
                <th>CustomerName</th>
                <th>City</th>
                <th>Email</th>
                <th>ContactNumber</th>
            </tr>
        </thead>
        <tbody>
            <tr *ngFor="let c of filteredCustomerList" (click)="getRowSelected(c)">
                <td >
                    {{c.CustomerId}}
                </td>
                <td >
                    {{c.CustomerName}}
                </td>
                <td >
                    {{c.City}}
                </td>
                <td >
                    {{c.Email}}
                </td>
                <td >
                    {{c.ContactNumber}}
                </td>
            </tr>
        </tbody>
    </table>
</div>
    `

})

export class CustomerListComponent implements OnInit{
    customers : Array<Customer>
    filteredCustomers: Array<Customer>;
    cityName: string;
    customerName: string;
    resetStr: string;
    constructor(private commServ: CommunicationService){
        this.customers = Customers


    }

    ngOnInit(): void {
        this.commServ.cityNameEmit.subscribe((name) => {
            this.cityName = name;
        })

        this.commServ.customerNameEmit.subscribe((name) => {
            this.customerName = name;
        })

        this.commServ.reset.subscribe((data) => {
            this.resetStr  = data;
        })
    }

    getRowSelected(customer){
        this.commServ.onEmitValue(customer.CustomerId);
    }

    get filteredCustomerList() : Array<Customer> {
        this.filteredCustomers = new Array<Customer>();
        if(this.resetStr === "")
            this.filteredCustomers = this.customers;

        else if (this.cityName != undefined) {
           this.filteredCustomers = this.customers.filter((e,i) => {
             return e.City === this.cityName;
           });

        }
        else if(this.customerName != undefined){
            this.filteredCustomers = this.customers.filter((e,i) => {
                return e.CustomerName === this.customerName;
              });
        }
        else {
          this.filteredCustomers = this.customers;
        }
        let numbers= new Array<number>()
        this.filteredCustomers.forEach((v,i)=>{
           numbers.push(v.CustomerId);
        });
        this.commServ.onArrayNumberEmit(numbers);
        return this.filteredCustomers;
      }
}