import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { pluck } from "rxjs/operators";
import { Heroe } from "../models/Heroe";

@Injectable()
export class HeroesService {

  url: string = "http://localhost:3000/api/";

  constructor(
    private http: HttpClient
  ) { }


  listarHeroes(): Observable<Heroe[]> {
    return this.http.get<Heroe>(`${this.url}heroe`).pipe(pluck('heroeDB'));
  }

  crearHeroe(body: any) {
    return this.http.post(`${this.url}heroe`, body);
  }

  modificarHeroe(idHeroe: number, body: any) {
    return this.http.put(`${this.url}heroe/${idHeroe}`, body);
  }

  eliminarHoroe(idHeroe: number) {
    //return this.http.delete(`${this.url}heroe/${idHeroe}`);
    return of('Eliminado');
  }


}
