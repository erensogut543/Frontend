import {Subject} from 'rxjs/Subject';
import {EventEmitter, Injectable, Output} from '@angular/core';
import {Sales} from "./sales.model";
import 'rxjs/Rx';

@Injectable()
export class SalesService {
  saleAdded=new EventEmitter<Sales[]>();

  @Output() saleChanged = new Subject<Sales[]>();
  // public sale: Sales[] = [];
  // new Soru('', '')
  private sale: Sales[] = [
    new Sales('Baslik_Test', 'Aciklama_Test', 5 , null),
    new Sales('2.Test', '2.Test', 10, null)
  ];

  constructor() {}

  // setSales(sale: Sales[]) {
  //   this.sale = sale;
  //   this.saleChanged.next(this.sale.slice());
  // }
  addSales(sale: Sales) {
    this.sale.push(sale);
    this.saleChanged.next(this.sale.slice());
    this.saleAdded.emit(this.sale.slice());
  }
  getSales() {
    return this.sale.slice();
  }


  displaySales() {
    this.saleChanged.next(this.sale.slice());
  }
}




