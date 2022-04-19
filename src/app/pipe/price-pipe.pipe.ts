import { Pipe, PipeTransform } from '@angular/core';
import { Car } from '../models/car';

@Pipe({
  name: 'pricePipe'
})
export class PricePipePipe implements PipeTransform {

  transform(cars : Car[], order : String): Car[] {
   
    switch (order){
      case 'priceUp':
        return cars.sort((a:Car, b:Car)=>b.price - a.price);
      case 'priceDown':
        return cars.sort((a:Car, b:Car)=>a.price - b.price);
      case 'dateUp':
        return cars.sort((a:Car, b:Car) => {
          return <any>new Date(b.issuance) - <any>new Date(a.issuance);
        });
      case 'dateDown':
        return cars.sort((a:Car, b:Car) => {
          return <any>new Date(a.issuance) - <any>new Date(b.issuance);
        });
      default :
        return cars.sort((a:Car, b:Car)=>b.price - a.price);
      }
   
   
  }

}
