import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Celular } from '../model/celular';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CelularService {
  private baseUrl: string = "http://demo:80/api/v1/demo/celulares"; //TODO: Agregar url del servicio

  constructor(private httpClient: HttpClient) { }

  getCelulares(): Observable<Celular[]> {
    return this.httpClient.get<Celular[]>(`${this.baseUrl}`);
  }
  getCelular(codigo_cel: number): Observable<Celular> {
    return this.httpClient.get<Celular>(`${this.baseUrl}/${codigo_cel}`);
  }
  crearCelular(celular: Celular): Observable<Celular> {
    return this.httpClient.post<Celular>(`${this.baseUrl}`,celular);
  }
  editarCelular(codigo_cel: number, celular: Celular): Observable<Celular> {
    return this.httpClient.put<Celular>(`${this.baseUrl}/${codigo_cel}`, celular);
  }
  borrarCelular(codigo_cel: number): Observable<any> {
    return this.httpClient.delete(`${this.baseUrl}/${codigo_cel}`);
  }
}
