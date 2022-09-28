import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Booking } from '../models/booking.model';
import { BookingService } from '../services/booking.service';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css']
})
export class BookingListComponent implements AfterViewInit {

  bookingList: Array<Booking>;

  displayedColumns: string[] = ['id', 'date', 'foodtruckId'];

  dataSource:MatTableDataSource<Booking> ;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public bookingService: BookingService) { }

  ngAfterViewInit() {
    this.bookingList = this.bookingService.getBookingList();
    this.dataSource = new MatTableDataSource<Booking>(this.bookingList);
    this.dataSource.paginator = this.paginator;
  }
}