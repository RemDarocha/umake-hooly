import { Injectable } from '@angular/core';
import { Booking } from '../models/booking.model';
import { FoodTruck } from '../models/foodTruck.model';

@Injectable({
  providedIn: 'root'
})
export class MockingService {

  constructor() { }

  getMockedFoodtrucks() {
    return new Array<FoodTruck>(
      new FoodTruck(0, 'FoodTruck0'),
      new FoodTruck(1, 'FoodTruck1'),
      new FoodTruck(2, 'FoodTruck2'),
      new FoodTruck(3, 'FoodTruck3'),
      new FoodTruck(4, 'FoodTruck4'),
      new FoodTruck(5, 'FoodTruck5'),
      new FoodTruck(6, 'FoodTruck6'),
      new FoodTruck(7, 'FoodTruck7'),
      new FoodTruck(8, 'FoodTruck8'),
      new FoodTruck(9, 'FoodTruck9'),
      new FoodTruck(10, 'FoodTruck10'),
      new FoodTruck(11, 'FoodTruck11'),
      new FoodTruck(12, 'FoodTruck12'),
      new FoodTruck(13, 'FoodTruck13'),
      new FoodTruck(14, 'FoodTruck14'),
    );
  }

  getMockedBooking(){
    return new Array<Booking>(
      new Booking(0, new Date('2070/07/14'),0),
      new Booking(1, new Date('2036/01/21'),1),
      new Booking(2, new Date('1954/10/05'),2),
      new Booking(3, new Date('1942/07/12'),3),
      new Booking(4, new Date('1935/06/03'),4),
      new Booking(5, new Date('2048/06/11'),5),
      new Booking(6, new Date('2033/10/21'),6),
      new Booking(7, new Date('1922/10/01'),7),
      new Booking(8, new Date('2036/04/07'),8),
      new Booking(9, new Date('1936/08/22'),9),
      new Booking(10, new Date('2011/02/12'),0),
      new Booking(11, new Date('1995/10/13'),0),
      new Booking(12, new Date('1993/08/03'),2),
      new Booking(13, new Date('1925/11/03'),3),
      new Booking(14, new Date('2065/02/11'),13),
      new Booking(15, new Date('1972/08/12'),5),
      new Booking(16, new Date('1927/07/10'),6),
      new Booking(17, new Date('2013/05/30'),14),
      new Booking(18, new Date('1973/08/21'),8),
      new Booking(19, new Date('1974/01/06'),2)
      );
  }

}





















