import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Booking } from '../models/booking.model';
import { FoodTruck } from '../models/foodTruck.model';
import { BookingService } from '../services/booking.service';

@Component({
  selector: 'app-booking-creation',
  templateUrl: './booking-creation.component.html',
  styleUrls: ['./booking-creation.component.css'],
})
export class BookingCreationComponent implements OnInit {
  form: FormGroup;
  bookingList: Booking[] = [];
  foodTruckList: FoodTruck[] = [];
  selectedFoodtruckId: number;

  constructor(public fb: FormBuilder, public toastrService: ToastrService, public router: Router, public bookingService: BookingService) { }

  ngOnInit() {
    this.foodTruckList = JSON.parse(localStorage.getItem('foodTruckList'));

    this.form = this.fb.group({
      dateInput: ['', Validators.required],
      selectFoodtruck: ['', Validators.required]
    })
  }

  createBooking() {
    if (!this.form.invalid) {
      const formValue = this.form.value;
      console.log(formValue);
      const bookingDate = this.form.get('dateInput').value; //formValue.date;

      console.log(bookingDate)
      console.log(this.selectedFoodtruckId)

      this.bookingService.createBooking(bookingDate, this.selectedFoodtruckId)

      this.toastrService.success('La réservation a été créée.');
      this.form.reset();
    }
    else {
      this.toastrService.error('Veuillez vérifier les informations saisies.');
    }
  }

  navigateToFoodTruck() {
    this.router.navigateByUrl('foodtruck');
  }

  updatedSelectedValue(foodtruckId: number) {
    this.selectedFoodtruckId = foodtruckId;
  }
}
