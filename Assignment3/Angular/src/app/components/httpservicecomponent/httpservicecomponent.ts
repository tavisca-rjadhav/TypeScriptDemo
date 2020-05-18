import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../service/app.httpservice.service';
import { ProductData } from '../../models/app.product';

@Component({
  selector: 'app-httpservice-component',
  templateUrl: './httpservice.view.html'
})
export class HttpServiceComponent implements OnInit {

  // inject the HttpService
  constructor(private serv: HttpService) { }

  loadData(): void {
      // subscribe to the observable
      this.serv.get().subscribe((data) => {
         console.log(`received response ${JSON.stringify(data)}`);
      }, (error) => {
        console.log(`error in response ${error}`);
      });
  }

  ngOnInit(): void {
      this.loadData();
  }
  save(): void {
      const prd = new ProductData(
       0, 'Prd100', 'Router', 'Electronics', 'HP', '1100MBPS', 3400
      );
     // subscribe to the observable
      this.serv.post(prd).subscribe((data) => {
        console.log(`received response ${JSON.stringify(data)}`);
      }, (error) => {
        console.log(`error in response ${error.message}`);
      });
  }
}
