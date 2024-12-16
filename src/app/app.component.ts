import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Meal, MealInfo } from './Model/meal.model';
import { MealServiceService } from './Service/meal-service.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MealFrontEnd';
  Meals : Meal = new Meal();

  request : string = "Arrabiata";

  constructor(private mealService : MealServiceService){
    this.Meals = new Meal();
  }

  ngOnInit(): void{
    console.log("entra qui lgo")
    this.retrieveMeal();
  }

  retrieveMeal(){
    this.mealService.addFood(this.request).subscribe((data : Meal) => {
      data.meals.forEach(element=> {
          console.log(element)
      });
    })
  }
  
}
