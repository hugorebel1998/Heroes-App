import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Heroes } from '../interface/heroes.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private apiUrl: string = "http://localhost:3000";

  constructor(private htt:HttpClient) { }

  getHeroes():Observable<Heroes[]>{
    const url = `${this.apiUrl}/heroes`;
    return this.htt.get<Heroes[]>(url);
  //  return this.htt.get<Heroes[]>('http://localhost:3000/heroes');
  }

  getHeroeId(id:string):Observable<Heroes>{
    const url = `${this.apiUrl}/heroes/${id}`;
    return this.htt.get<Heroes>(url);
    // return this.htt.get<Heroes>(`http://localhost:3000/heroes/${id}`);
  }

  getSugerencias(termino:string):Observable<Heroes[]>{
    const url = `${this.apiUrl}/heroes?q=${termino}&_limit=6`;
    return this.htt.get<Heroes[]>(url);

  }

  //Metodo para guardar un registro
  guardarHeroe(heroe:Heroes):Observable<Heroes>{
    return this.htt.post<Heroes>(`http://localhost:3000/heroes`, heroe);
  }

  //Metodo para actualizar un registro
  actualizarHeroe(heroe:Heroes):Observable<Heroes>{
    return this.htt.put<Heroes>(`http://localhost:3000/heroes/${heroe.id}`, heroe);
  }
  
}
