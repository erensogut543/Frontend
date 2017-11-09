import {
  Component,  OnInit

} from '@angular/core';
import {SalesService} from "../../sales.service";
import {Sales} from "../../sales.model";
import {Subscription} from "rxjs/Subscription";
import 'rxjs/Rx';



@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {
  subscription: Subscription;
  sale: Sales[];




  constructor(private salesService: SalesService) { }

  ngOnInit() {
    this.sale= this.salesService.getSales();
    this.salesService.saleAdded.subscribe(
      (sale:Sales[])=>{
        this.sale=sale;
      }
    );
    this.salesService.getSales();
    this.salesService.displaySales();


  }


  onGet() {


     }





}
