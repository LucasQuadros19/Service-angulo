import { Component } from '@angular/core';
import { Carro } from 'src/app/models/CarroM';
import { CarroServiceService } from 'src/app/services/CarroService/carro-service.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-carrodetails',
  templateUrl: './carrodetails.component.html',
  styleUrls: ['./carrodetails.component.scss']
})
export class CarrolistComponent {
  carros: Carro[] = [];

  constructor(private carroService: CarroServiceService) { }

  ngOnInit(): void {
    this.carregar();
  }

  carregar() {
    this.carroService.listarCarros().subscribe(
      (carros) => {
        this.carros = carros;
      },
      (erro: HttpErrorResponse) => {
        alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
        console.error(erro);
      }
    );
  }
}
