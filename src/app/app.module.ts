import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';
import { CarsComponent } from './components/cars/cars.component';
import { CarDetailsComponent } from './components/car-details/car-details.component';
import { CreateCarComponent } from './components/create-car/create-car.component';

import { FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { PricePipePipe } from './pipe/price-pipe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    CarsComponent,
    CarDetailsComponent,
    CreateCarComponent,
    PricePipePipe

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
