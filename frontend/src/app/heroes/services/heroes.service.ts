import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Personajes } from '../interfaces/personaje';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor(private http:HttpClient) { }

  private baseUrl:string = environment.baseUrl

  getPersonajes(){
    return this.http.get<Personajes[]>(`${this.baseUrl}/heroes`)
  }

  getPersonajeId(id:number){
    return this.http.get<Personajes>(`${this.baseUrl}/heroes/${id}`)
  }

  getSugerencias(termino:string){
    return this.http.get<Personajes[]>(`${this.baseUrl}/heroes?q=${termino}&_limit=6`)

  }

  agregarPersonaje(personaje:Personajes):Observable<Personajes>{
    return this.http.post<Personajes>(`${this.baseUrl}/heroes`, personaje)
  }

  editarPersonaje(personaje:Personajes):Observable<Personajes>{
    return this.http.put<Personajes>(`${this.baseUrl}/heroes/${personaje.id}`, personaje)
  }

  eliminarPersonaje(id:number){
    return this.http.delete<any>(`${this.baseUrl}/heroes/${id}`)
  }

}
