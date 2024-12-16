import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { Meal } from '../Model/meal.model';
import { RequestInfos } from '../Model/request.model';

@Injectable({
  providedIn: 'root'
})
export class MealServiceService {

  private apiUrl = "http://localhost:5082/api/Meal"

  constructor(private http: HttpClient){}

  addFood(Cibo : string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    
    return this.http.post(this.apiUrl, " \""+ Cibo +"\" " , { headers });
  }

}
