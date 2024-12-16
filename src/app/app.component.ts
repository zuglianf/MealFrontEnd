import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Meal, MealInfo } from './Model/meal.model';
import { MealServiceService } from './Service/meal-service.service';
import { FormControl, FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReactiveFormsModule, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MealFrontEnd';
  Meals : Meal = new Meal();
  request : string ="";
  name = new FormControl('')

    onClick(): void {
    this.Meals.meals = [];
    if (this.name.value === null) {
      
    }
    else {
      this.request = this.name.value
    }
    console.log("entra selettivo")
    this.retrieveMeal(this.request);
  }

  constructor(private mealService : MealServiceService){
    this.Meals = new Meal();
  }  


  retrieveMeal(re : string){
    this.mealService.addFood(re).subscribe((data : Meal) => {
      data.meals.forEach(element => {
          this.Meals.meals.push(element);
          console.log(element)
      });
    
    })
  }
  
}
