import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { ToastrModule } from 'ngx-toastr';
import { RouterModule } from '@angular/router';
import { BookingCreationComponent } from './booking-creation/booking-creation.component';
import { AppRoutingModule } from './app-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FoodTruckComponent } from './foodtruck-creation/foodtruck-creation.component';
import { FoodtruckListComponent } from './foodtruck-list/foodtruck-list.component';
import { BookingListComponent } from './booking-list/booking-list.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  imports: [
    MatNativeDateModule,
    MatDatepickerModule,
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    AppRoutingModule,
    RouterModule,
    BrowserModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatTableModule,
    MatPaginatorModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      preventDuplicates: true,
      countDuplicates: true,
      maxOpened: 3,
      autoDismiss: true,
    }),
  ],
  declarations: [AppComponent, BookingCreationComponent, FoodTruckComponent, FoodtruckListComponent, BookingListComponent, HeaderComponent],
  bootstrap: [AppComponent],
  exports: [BookingCreationComponent, FoodTruckComponent, FoodtruckListComponent],
})
export class AppModule { }
