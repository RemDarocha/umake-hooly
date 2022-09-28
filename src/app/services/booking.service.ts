import { Injectable } from '@angular/core';
import { Booking } from '../models/booking.model';
import { MockingService } from './mocking.service';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  bookingList: Booking[];

  constructor(public mocking: MockingService) { }

  createBooking(bookingDate: Date, foodTruckId: number) {

    let bookingList: Booking[] = this.getBookingListFromLocalStorage();

    let bookingId = bookingList ? Math.max(...bookingList.map((booking) => booking.id)) + 1 : 1;

    bookingList.push(new Booking(bookingId, bookingDate, foodTruckId));

    localStorage.setItem('bookingList', JSON.stringify(bookingList));
  }

  getBookingList() {
    return this.getBookingListFromLocalStorage();
  }

  private getBookingListFromLocalStorage() {
    return JSON.parse(localStorage.getItem('bookingList')) ?? this.mocking.getMockedBooking();
  }

  private getOneBookingFromLocalStorage(bookingId: number) {
    return JSON.parse(
      localStorage.getItem('bookingList')
    ).find((booking: Booking) => booking.id === bookingId);
  }
}