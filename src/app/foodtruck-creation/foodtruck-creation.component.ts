import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FoodtruckService } from '../services/foodtruck.service';

@Component({
  selector: 'app-food-truck',
  templateUrl: './foodtruck-creation.component.html',
  styleUrls: ['./foodtruck-creation.component.css'],
})
export class FoodTruckComponent implements OnInit {
  form: FormGroup = this.fb.group({
    name: new FormControl(null),
  });

  constructor(
    public fb: FormBuilder,
    public toastrService: ToastrService,
    public router: Router,
    public foodtruckService: FoodtruckService
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', Validators.required]
    })
  }

  createFoodTruck() {
    if (!this.form.invalid) {
      const formValue = this.form.value;

      const foodTruckName = formValue.name;

      this.foodtruckService.createFoodtruck(foodTruckName);
      this.toastrService.success('Création réussie')
      this.form.reset();
    } 
    else {
      this.toastrService.error('Veuillez vérifier les informations saisies.');
    }
  }
}
