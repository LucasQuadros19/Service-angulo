
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Livro } from 'src/app/models/LivroM';
import { LivroServiceService } from 'src/app/services/LivroService/livro-service.service';

@Component({
  selector: 'app-livroList',
  templateUrl: './livroList.component.html',
  styleUrls: ['./livroList.component.scss']
})
export class LivrodetailsComponent {
  @Input() livro: Livro = new Livro();
  @Output() retorno = new EventEmitter<Livro>();

  constructor(private livroService: LivroServiceService) { }

  salvar() {
    this.livroService.adicionarLivro(this.livro).subscribe(
      (livroAdicionado: Livro) => {

        this.retorno.emit(livroAdicionado);
      },
      (erro) => {
        alert('Exemplo de tratamento de erro/exception! Observe o erro no console.');
        console.error(erro);
      }
    );
  }

  atualizar() {
    this.livroService.atualizarLivro(this.livro.id, this.livro).subscribe(
      (livroAtualizado: Livro) => {
   
        this.retorno.emit(livroAtualizado);
      },
      (erro) => {
        alert('Exemplo de tratamento de erro/exception! Observe o erro no console.');
        console.error(erro);
      }
    );
  }

  excluir() {
    this.livroService.excluirLivro(this.livro.id).subscribe(
      () => {

        this.retorno.emit(undefined);
      },
      (erro) => {
        alert('Exemplo de tratamento de erro/exception! Observe o erro no console.');
        console.error(erro);
      }
    );
  }
}
