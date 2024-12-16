import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { Meal } from '../Model/meal.model';

@Injectable({
  providedIn: 'root'
})
export class MealServiceService {

  private apiUrl = "http://localhost:5082/api/Meal"

  body : string = ""
  constructor(private http: HttpClient){}




  addFood(Cibo : string) : Observable<Meal>{
    var c : Observable<Meal> = this.http.post<Meal>(this.apiUrl+ '?Request='+Cibo,Cibo)
    return c;
  }
  

}
