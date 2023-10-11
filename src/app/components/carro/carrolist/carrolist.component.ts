import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Pessoa } from 'src/app/models/pessoa'; 
import { PessoaService } from 'src/app/services/PessoaService/pessoa-pessoa-service.service'; 

@Component({
  selector: 'app-pessoadetail', 
  templateUrl: './pessoadetail.component.html',
  styleUrls: ['./pessoadetail.component.scss'] 
})
export class PessoadetailComponent {
  @Input() pessoa: Pessoa = new Pessoa(); 
  @Output() retorno = new EventEmitter<Pessoa>();

  constructor(private pessoaService: PessoaService) { }

  salvar() {
    this.pessoaService.adicionarPessoa(this.pessoa).subscribe(
      (pessoaAdicionada: Pessoa) => {
        this.retorno.emit(pessoaAdicionada);
      },
      (erro) => {
        alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
        console.error(erro);
      }
    );
  }

  atualizar() {
    this.pessoaService.atualizarPessoa(this.pessoa.id, this.pessoa).subscribe(
      (pessoaAtualizada) => {
        this.retorno.emit(pessoaAtualizada);
      },
      (erro) => {
        alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
        console.error(erro);
      }
    );
  }

  excluir() {
    this.pessoaService.excluirPessoa(this.pessoa.id).subscribe(
      () => {
        this.retorno.emit(undefined);
      },
      (erro) => {
        alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
        console.error(erro);
      }
    );
  }
}
