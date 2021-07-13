import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Auth } from '../../../auth/interface/auth.interface'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent{

get user (){
  return this._authService.user;
}

  constructor(
              private _authService:AuthService,
              private _route:Router
  ) { }

  logout(){
    this._route.navigate(['./auth/login'])
  }

}
