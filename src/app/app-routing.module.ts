import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingCreationComponent } from './booking-creation/booking-creation.component';
import { BookingListComponent } from './booking-list/booking-list.component';
import { FoodTruckComponent as FoodTruckCreationComponent } from './foodtruck-creation/foodtruck-creation.component';
import { FoodtruckListComponent } from './foodtruck-list/foodtruck-list.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'foodtrucklist',
    pathMatch: 'full'
  },
  {
    path: 'createbooking',
    component: BookingCreationComponent,
  },
  {
    path: 'bookinglist',
    component: BookingListComponent,
  },
  {
    path: 'createfoodtruck',
    component: FoodTruckCreationComponent,
  },
  {
    path: 'foodtrucklist',
    component: FoodtruckListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { } 
