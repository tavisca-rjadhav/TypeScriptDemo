import {Component, OnInit} from '@angular/core'
import { Order } from 'src/app/models/app.order'
import { Orders } from 'src/app/models/app.constants'
import { CommunicationService } from 'src/app/service/app.communicationservice.service';

@Component({
    selector:"app-orderlist-component",
    template:`
    <hr/>
    <div class="container">
    <h2>Order List</h2>
    <table class="table table-striped table-bordered table-dark">
        <thead>
            <tr>
                <th>OrderId</th>
                <th>OrderName</th>
                <th>Date</th>
                <th>CustomerId</th>
                <th>Quantity</th>
                <th>Amount</th>
            </tr>
        </thead>
        <tbody>
            <tr *ngFor="let o of filteredOrdersList">
                <td>
                    {{o.OrderId}}
                </td>
                <td>
                    {{o.OrderName}}
                </td>
                <td>
                    {{o.Date}}
                </td>
                <td>
                    {{o.CustomerId}}
                </td>
                <td>
                    {{o.OrderQuantity}}
                </td>
                <td>
                    {{o.Amount}}
                </td>
            </tr>
        </tbody>
    </table>
</div>

    `

})

export class OrderListComponent implements OnInit{
    orders: Array<Order>;
    filteredOrders: Array<Order>;
    customerId: number;
    customerIds: Array<number>;
    constructor(private commServ: CommunicationService){
        this.orders = Orders
    }
    ngOnInit(): void {
        this.commServ.emitValue.subscribe((id) => {
            this.customerId = id;
        })

        this.commServ.emitArrayValue.subscribe((ids) => {
            this.customerIds = ids;
        })
    }

    get filteredOrdersList() : Array<Order> {
        this.filteredOrders = new Array<Order>();
        if (this.customerId > 0) {
           this.filteredOrders = this.orders.filter((e,i) => {
             return e.CustomerId === this.customerId;
           });
        }
        else if(this.customerIds && this.customerIds.length > 0){
            this.orders.forEach((v, i) =>{
            if(this.customerIds.indexOf(v.CustomerId)> -1)
                this.filteredOrders.push(v)
             });
        }       
         else {
          this.filteredOrders = this.orders;
        }
        
        return this.filteredOrders;
      }
}