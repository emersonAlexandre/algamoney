import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {MatTableDataSource} from '@angular/material';

export interface Lancamento {
  tipo: string;
  descricao: string;
  dataVencimento: Date;
  dataPagamento: Date;
  valor: number;
  pessoa: string;
}

// TODO: replace this with real data from your application
const ELEMENT_DATA: Lancamento[] = [
  { tipo: 'DESPESA', descricao: 'Compra de pão', dataVencimento: new Date(2017, 6, 30),
    dataPagamento: null, valor: 4.55, pessoa: 'Padaria do José' },
  { tipo: 'RECEITA', descricao: 'Venda de software', dataVencimento: new Date(2017, 6, 10),
    dataPagamento: new Date(2017, 6, 9), valor: 80000, pessoa: 'Atacado Brasil' },
  { tipo: 'DESPESA', descricao: 'Impostos', dataVencimento: new Date(2017, 7, 20),
    dataPagamento: null, valor: 14312, pessoa: 'Ministério da Fazenda' },
  { tipo: 'DESPESA', descricao: 'Mensalidade de escola', dataVencimento: new Date(2017, 6, 5),
    dataPagamento: new Date(2017, 5, 30), valor: 800, pessoa: 'Escola Abelha Rainha' },
  { tipo: 'RECEITA', descricao: 'Venda de carro', dataVencimento: new Date(2017, 8, 18),
    dataPagamento: null, valor: 55000, pessoa: 'Sebastião Souza' },
  { tipo: 'DESPESA', descricao: 'Aluguel', dataVencimento: new Date(2017, 7, 10),
    dataPagamento: new Date(2017, 7, 9), valor: 1750, pessoa: 'Casa Nova Imóveis' },
  { tipo: 'DESPESA', descricao: 'Mensalidade musculação', dataVencimento: new Date(2017, 7, 13),
    dataPagamento: null, valor: 180, pessoa: 'Academia Top' },
  { tipo: 'DESPESA', descricao: 'Mensalidade de escola', dataVencimento: new Date(2017, 6, 5),
    dataPagamento: new Date(2017, 5, 30), valor: 800, pessoa: 'Escola Abelha Rainha' },
  { tipo: 'RECEITA', descricao: 'Venda de carro', dataVencimento: new Date(2017, 8, 18),
    dataPagamento: null, valor: 55000, pessoa: 'Sebastião Souza' },
  { tipo: 'DESPESA', descricao: 'Aluguel', dataVencimento: new Date(2017, 7, 10),
    dataPagamento: new Date(2017, 7, 9), valor: 1750, pessoa: 'Casa Nova Imóveis' },
  { tipo: 'DESPESA', descricao: 'Mensalidade musculação', dataVencimento: new Date(2017, 7, 13),
    dataPagamento: null, valor: 180, pessoa: 'Academia Top' },
  { tipo: 'RECEITA', descricao: 'Venda de carro', dataVencimento: new Date(2017, 8, 18),
    dataPagamento: null, valor: 55000, pessoa: 'Sebastião Souza' },
  { tipo: 'DESPESA', descricao: 'Aluguel', dataVencimento: new Date(2017, 7, 10),
    dataPagamento: new Date(2017, 7, 9), valor: 1750, pessoa: 'Casa Nova Imóveis' },
  { tipo: 'DESPESA', descricao: 'Mensalidade musculação', dataVencimento: new Date(2017, 7, 13),
    dataPagamento: null, valor: 180, pessoa: 'Academia Top' }
];

@Component({
  selector: 'app-lancamentos-page',
  templateUrl: './lancamentos-page.component.html',
  styleUrls: ['./lancamentos-page.component.css']
})
export class LancamentosPageComponent implements OnInit {
  dataSource = new MatTableDataSource<Lancamento>(ELEMENT_DATA);
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;
  displayedColumns = ['pessoa', 'descricao', 'dataVencimento', 'dataPagamento', 'valor', 'acoes'];

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

}
