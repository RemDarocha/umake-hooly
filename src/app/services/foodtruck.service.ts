import { Injectable } from '@angular/core';
import { FoodTruck } from '../models/foodTruck.model';
import { MockingService } from './mocking.service';

@Injectable({
  providedIn: 'root'
})
export class FoodtruckService {

  constructor(public mocking:MockingService) { }

  createFoodtruck(foodTruckName: string) {
    
    let foodTruckList: FoodTruck[] = this.getFoodTruckListFromLocalStorage();

    let foodtruckId = foodTruckList ? Math.max(...foodTruckList.map((foodTruck) => foodTruck.id)) + 1 : 1;

    foodTruckList.push(new FoodTruck(foodtruckId, foodTruckName))

    localStorage.setItem('foodTruckList', JSON.stringify(foodTruckList));
  }

  getFoodTruckList() {
    return this.getFoodTruckListFromLocalStorage();
  }

  getOneFoodTruck(foodTruckId: number) {
    return JSON.parse(
      localStorage.getItem('foodTruckList')
    ).find((foodTruck: FoodTruck) => foodTruck.id === foodTruckId);
  }

  private getFoodTruckListFromLocalStorage(): FoodTruck[] {
    return JSON.parse(localStorage.getItem('foodTruckList')) ?? this.mocking.getMockedFoodtrucks();
  }

}