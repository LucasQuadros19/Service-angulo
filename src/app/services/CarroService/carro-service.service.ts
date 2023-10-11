import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarroServiceService {
  private baseUrl = 'http://localhost:8081/api/carros'; 

  constructor(private http: HttpClient) { }

  listarCarros(): Observable<any[]> {
    const url = `${this.baseUrl}/listar`;
    return this.http.get<any[]>(url);
  }

  getCarroPorId(id: number): Observable<any> {
    const url = `${this.baseUrl}/id/${id}`;
    return this.http.get<any>(url);
  }

  adicionarCarro(carro: any): Observable<any> {
    const url = `${this.baseUrl}/cadastrar`;
    return this.http.post(url, carro);
  }

  atualizarCarro(id: number, carro: any): Observable<any> {
    const url = `${this.baseUrl}/put/${id}`;
    return this.http.put(url, carro);
  }

  excluirCarro(id: number): Observable<any> {
    const url = `${this.baseUrl}/delete/${id}`;
    return this.http.delete(url);
  }
}