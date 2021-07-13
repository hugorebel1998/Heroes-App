import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Auth } from '../interface/auth.interface';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl: string = "http://localhost:3000";
  constructor(
              private http:HttpClient
  ) { }

  login(){
    return this.http.get<Auth>(`${this.apiUrl}/usuarios/1`);


  }
}
