import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { CarForm } from '../models/car-form';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private httpOptions = {

    headers: new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    })
  };

  private BASE_URL = "http://localhost:3000";

  
    getCars(): Observable<Car[]>{
      return this.httpClient.get<Car[]>(`${this.BASE_URL}/cars`);
    }

    getCar(id : number): Observable<Car>{
      return this.httpClient.get<Car>(`${this.BASE_URL}/cars/${id}`);
    }
    
    create(car : CarForm): Observable<Car[]>{
      return this.httpClient.post<Car[]>(`${this.BASE_URL}/cars`, car, this.httpOptions)
    }


  constructor(private httpClient : HttpClient) { }
}