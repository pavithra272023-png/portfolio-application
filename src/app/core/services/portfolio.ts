import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


export interface Investment{
   assetType:string;
   quantity:number;
   price:number;
   purchasedDate:string;
}
@Injectable({
  providedIn: 'root',
})
export class Portfolio {

  private investmentSubject=new BehaviorSubject<Investment[]>([]);
  investment$=this.investmentSubject.asObservable();


  addInvestment(investment:Investment){
    console.log(investment)
    const currentVal=this.investmentSubject.value;
    this.investmentSubject.next([...currentVal,investment]);
    console.log('subject value',this.investmentSubject.value)
  }
  
}
