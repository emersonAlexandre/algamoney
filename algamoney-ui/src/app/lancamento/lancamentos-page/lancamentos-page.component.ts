import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {DateAdapter, MAT_DATE_FORMATS, MatPaginator, MatTableDataSource, PageEvent} from '@angular/material';
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
  filtro = new LancamentoFiltro();
  pageEvent = new PageEvent();
  options: string[] = [];
  filteredOptions: Observable<string[]>;
  displayedColumns = ['pessoa', 'descricao', 'dataVencimento', 'dataPagamento', 'valor', 'acoes'];
  dataSource = new MatTableDataSource();
  totalRegistros = 0;
  btnPrevious: HTMLButtonElement;
  btnNext: HTMLButtonElement;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private lancamentoService: LancamentoService) {}

  ngOnInit() {
    this.pesquisar();
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
    this.btnPrevious = document.querySelector('.mat-paginator-navigation-previous') as HTMLButtonElement;
    this.btnNext = document.querySelector('.mat-paginator-navigation-next') as HTMLButtonElement;
    const that = this;
    this.btnPrevious.addEventListener('click', function () {
      that.pesquisar(that.pageEvent.pageIndex);
      console.log(that.totalRegistros);
      console.log(that.dataSource.data);
    });
    this.btnNext.addEventListener('click', function () {
      that.pesquisar(that.pageEvent.pageIndex);
      console.log(that.totalRegistros);
      console.log(that.dataSource.data);
    });
    this.dataSource.paginator = this.paginator;
  }

  pesquisar(pagina = 0) {
    this.filtro.pagina = pagina;
    this.lancamentoService.pesquisar(this.filtro)
      .then(dados => {
        this.totalRegistros = dados.total;
        this.dataSource.data = dados.lancamentos;
        this.options = dados.lancamentos.map(value => value.descricao);
        console.log(this.totalRegistros);
        console.log(this.dataSource.data);
        console.log(document.getElementsByTagName('table'));
      });
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

}
