import { Component, inject } from '@angular/core';
import { Investment, Portfolio } from '../core/services/portfolio';
import { CommonModule } from '@angular/common';
import { CurrencyFormatPipe } from '../shared/pipes/currency-format-pipe';
import { Highlight } from '../shared/directives/highlight';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule,CurrencyFormatPipe,Highlight],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
  standalone:true
})
export class Dashboard {
     
  portfolioService =inject(Portfolio);
  
   investment$=this.portfolioService.investment$;



}
