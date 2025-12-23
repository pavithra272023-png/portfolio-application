import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyFormat',
  standalone:true
})
export class CurrencyFormatPipe implements PipeTransform {

  transform(value: unknown): string {
   

    return value?  '₹ ' + value.toLocaleString() : '';
  }

}
