import { Component } from '@angular/core';
import { Livro } from 'src/app/models/LivroM';
import { LivroServiceService } from 'src/app/services/LivroService/livro-service.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-livrodetails',
  templateUrl: './livrodetails.component.html',
  styleUrls: ['./livrodetails.component.scss']
})
export class LivrolistComponent {
  livros: Livro[] = [];

  constructor(private livroService: LivroServiceService) { }

  ngOnInit(): void {
    this.carregar();
  }

  carregar() {
    this.livroService.listarLivros().subscribe(
      (livros) => {
        this.livros = livros;
      },
      (erro: HttpErrorResponse) => {
        alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
        console.error(erro);
      }
    );
  }
}
