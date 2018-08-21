import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

export interface Pessoa {
  value: string;
  viewValue: string;
}

export interface Categoria {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-lancamento-cadastro',
  templateUrl: './lancamento-cadastro.component.html',
  styleUrls: ['./lancamento-cadastro.component.css']
})
export class LancamentoCadastroComponent {

  tipo: string;

  categorias: Categoria[] = [
    {value: '0', viewValue: 'Categoria1'},
    {value: '1', viewValue: 'Categoria2'},
    {value: '2', viewValue: 'Categoria3'}
  ];

  pessoas: Pessoa[] = [
    {value: '0', viewValue: 'Jão'},
    {value: '1', viewValue: 'Júnior'},
    {value: '2', viewValue: 'José'}
  ];

  myFunc(tipoOpt) {
    this.tipo = tipoOpt.value;
    console.log(this.tipo);
  }

}
