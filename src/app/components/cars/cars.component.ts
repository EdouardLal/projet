import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

order='dateUp';
carList!: Car[];
car !: Car;

  constructor(private carService : CarService) { }

  priceSorter(){
    if(this.order==='priceUp'){
      this.order = 'priceDown';
    }else{
      this.order = 'priceUp';
    }
  }

  dateSorter(){
    if(this.order==='dateUp'){
      this.order = 'dateDown';
    }else{
      this.order = 'dateUp';
    }

  }

  ngOnInit(): void {
    this.display();
  }

  display(){
    this.carService.getCars().subscribe({
      next : cars =>{
        this.carList = cars;
      }, error : err =>{
        console.log(err);
      },
      complete : () =>{
        console.log('succes');
      }
    });
  }

  displayOne(id : number){
    this.carService.getCar(id).subscribe({
      next : car =>{
        this.car = car;
      }, error : err =>{
        console.log(err);
      },
      complete : () =>{
        console.log('succes');
      }
    });
  }

}
