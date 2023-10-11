import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LivroServiceService {
  private baseUrl = 'http://localhost:8081/api/livros'; // URL base para os endpoints de livros

  constructor(private http: HttpClient) { }

  listarLivros(): Observable<any[]> {
    const url = `${this.baseUrl}/listar`;
    return this.http.get<any[]>(url);
  }

  getLivroPorId(id: number): Observable<any> {
    const url = `${this.baseUrl}/id/${id}`;
    return this.http.get<any>(url);
  }

  adicionarLivro(livro: any): Observable<any> {
    const url = `${this.baseUrl}/cadastrar`;
    return this.http.post(url, livro);
  }

  atualizarLivro(id: number, livro: any): Observable<any> {
    const url = `${this.baseUrl}/put/${id}`;
    return this.http.put(url, livro);
  }

  excluirLivro(id: number): Observable<any> {
    const url = `${this.baseUrl}/delete/${id}`;
    return this.http.delete(url);
  }
}