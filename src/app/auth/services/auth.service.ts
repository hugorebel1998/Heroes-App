import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Auth } from '../interface/auth.interface';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl: string = "http://localhost:3000";
  //nombre de usuario
  private _user: Auth | undefined;

  //Hacer publica la propiedad _user con el metodo get 
  get user():Auth{
    return {...this._user!};
  }

  constructor(
    private http: HttpClient
  
    ) { }

    verificaAutenticacion():Observable<boolean>{
      if (!localStorage.getItem('token')) {
        return of(false);
      } 
      return this.http.get<Auth>(`${this.apiUrl}/usuarios/1`)
      .pipe(
        map(auth => {
          this._user = auth
          return true;
        })
      );
    }

  login() {
    return this.http.get<Auth>(`${this.apiUrl}/usuarios/1`)
      .pipe(
        tap(user => this._user = user),
        tap(auth => localStorage.setItem("token", auth.id))
      );

  }
}
