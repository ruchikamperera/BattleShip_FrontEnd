import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BattleShipService {

  private readonly baseUrl = 'https://localhost:7134/api/';

  constructor(private http: HttpClient) { }

  createBattleShip(data: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}BattleShip/createbattleship`, data);
  }

  getData(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}BattleShip/data`);
  }

  getsunkshipdetails(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}BattleShip/getsunkshipdetails`);
  }

  fire(data: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}BattleShip/fire`, data);
  }
}
