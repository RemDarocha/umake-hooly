import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FoodTruck } from '../models/foodTruck.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FoodtruckService } from '../services/foodtruck.service';

@Component({
  selector: 'app-foodtruck-list',
  templateUrl: './foodtruck-list.component.html',
  styleUrls: ['./foodtruck-list.component.css']
})
export class FoodtruckListComponent implements AfterViewInit {

  foodTruckList: FoodTruck[] = new Array<FoodTruck>();
  displayedColumns: string[] = ['id', 'name'];

  dataSource = new MatTableDataSource<FoodTruck>(this.foodTruckList);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(public foodtruckService: FoodtruckService) { }

  ngAfterViewInit() {
    this.foodTruckList = this.foodtruckService.getFoodTruckList();
    this.dataSource = new MatTableDataSource<FoodTruck>(this.foodTruckList);
    this.dataSource.paginator = this.paginator;
  }
}