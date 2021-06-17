import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Heroes } from '../interface/heroes.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor(private htt:HttpClient) { }

  getHeroes():Observable<Heroes[]>{
   return this.htt.get<Heroes[]>('http://localhost:3000/heroes');
  }
}
