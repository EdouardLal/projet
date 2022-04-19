import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Car } from 'src/app/models/car';
import { CarForm } from 'src/app/models/car-form';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-create-car',
  templateUrl: './create-car.component.html',
  styleUrls: ['./create-car.component.css']
})
export class CreateCarComponent {

  car ?: Car;

  constructor(private carService : CarService, private fb : FormBuilder) { }

  addNewCarForm:FormGroup = this.fb.group({
    title : [this.car?.title, [Validators.required]],
    address : [this.car?.address, [Validators.required]],
    brand : [this.car?.brand, [Validators.required]],
    model : [this.car?.model, [Validators.required]],
    model_year : [this.car?.model_year, [Validators.required]],
    mileage : [this.car?.mileage, [Validators.required]],
    fuel : [this.car?.fuel, [Validators.required]],
    color : [this.car?.color, [Validators.required]],
    numbers_doors : [this.car?.numbers_doors, [Validators.required]],
    horse_power : [this.car?.horse_power, [Validators.required]],
    price : [this.car?.price, [Validators.required]],
    picture : [this.car?.pictures[0]],

  });

  onSubmit(){
    console.log("onSubmit start");

    if (this.addNewCarForm.invalid) {
      return;
    }

    let car : CarForm={
      title: this.addNewCarForm.value.title,
      address: this.addNewCarForm.value.address,
      brand: this.addNewCarForm.value.brand,
      model: this.addNewCarForm.value.model,
      model_year: this.addNewCarForm.value.model_year,
      mileage: this.addNewCarForm.value.mileage,
      fuel: this.addNewCarForm.value.fuel,
      color: this.addNewCarForm.value.color,
      numbers_doors: this.addNewCarForm.value.numbers_doors,
      horse_power: this.addNewCarForm.value.horse_power,
      price: this.addNewCarForm.value.price,
      pictures: this.addNewCarForm.value.picture,
      issuance: '',
      sold: false
    };
     
    this.carService.create(car)
    .subscribe({
      next: ok => {
      }
    });


  }

}
