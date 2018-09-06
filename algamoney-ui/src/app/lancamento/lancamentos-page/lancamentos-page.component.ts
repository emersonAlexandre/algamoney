import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {DateAdapter, MAT_DATE_FORMATS, MatTableDataSource} from '@angular/material';
import {LancamentoFiltro, LancamentoService} from '../lancamento.service';
import {APP_DATE_FORMATS, AppDateAdapter} from './data.adapter';

@Component({
  selector: 'app-lancamentos-page',
  templateUrl: './lancamentos-page.component.html',
  styleUrls: ['./lancamentos-page.component.css'],
  providers: [
    {
      provide: DateAdapter, useClass: AppDateAdapter
    },
    {
      provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS
    }
  ]
})
export class LancamentosPageComponent implements OnInit {
  myControl = new FormControl();
  options: string[] = [];
  filteredOptions: Observable<string[]>;
  displayedColumns = ['pessoa', 'descricao', 'dataVencimento', 'dataPagamento', 'valor', 'acoes'];
  dataSource = new MatTableDataSource();
  descricao: string;
  dataVencimentoInicio: Date;
  dataVencimentoFim: Date;

  constructor(private lancamentoService: LancamentoService) {}
  ngOnInit() {
    this.pesquisar();
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  pesquisar() {
    const filtro: LancamentoFiltro = {
      descricao: this.descricao,
      dataVencimentoInicio: this.dataVencimentoInicio,
      dataVencimentoFim: this.dataVencimentoFim
    };
    this.lancamentoService.pesquisar(filtro)
      .then(dados => {
        this.dataSource.data = dados;
        this.options = dados.map(value => value.descricao);
      });
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

}
