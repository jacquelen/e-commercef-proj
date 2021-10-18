import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserlistService {

  constructor(private http :HttpClient) { }

  getUsersList(): Observable<any>{
    return this.http.get("https://fakestoreapi.com/products");

  }
  getUserDetail(id){
    return this.http.get(`https://fakestoreapi.com/products/${id}`)
  }
}
