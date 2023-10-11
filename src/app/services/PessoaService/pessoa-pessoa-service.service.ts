import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {
  private baseUrl = 'http://localhost:8081/api/pessoas'; 

  constructor(private http: HttpClient) { }

  listarPessoas(): Observable<any[]> {
    const url = `${this.baseUrl}/listar`;
    return this.http.get<any[]>(url);
  }

  getPessoaPorId(id: number): Observable<any> {
    const url = `${this.baseUrl}/id/${id}`;
    return this.http.get<any>(url);
  }

  adicionarPessoa(pessoa: any): Observable<any> {
    const url = `${this.baseUrl}/cadastrar`;
    return this.http.post(url, pessoa);
  }

  atualizarPessoa(id: number, pessoa: any): Observable<any> {
    const url = `${this.baseUrl}/put/${id}`;
    return this.http.put(url, pessoa);
  }

  excluirPessoa(id: number): Observable<any> {
    const url = `${this.baseUrl}/delete/${id}`;
    return this.http.delete(url);
  }
}
