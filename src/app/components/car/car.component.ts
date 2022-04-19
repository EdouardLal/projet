import { Component, EventEmitter, Input, LOCALE_ID, NgModule, OnInit, Output } from '@angular/core';
import { Car } from 'src/app/models/car';
import {Router} from '@angular/router';
@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent  {

  

  @Input()
  car !: Car;
  @Output()
  carDetailsEvent = new EventEmitter();


  constructor(private routeur : Router){}

  displayCar(car : Car) {
    this.routeur.navigate(['/cars', car.id]);
    }





}
