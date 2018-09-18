import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {PessoaFiltro, PessoaService} from '../pessoa.service';

@Component({
  selector: 'app-pessoas-page',
  templateUrl: './pessoas-page.component.html',
  styleUrls: ['./pessoas-page.component.css']
})

export class PessoasPageComponent implements OnInit {
  displayedColumns = ['nome', 'cidade', 'estado', 'ativo', 'acoes'];
  myControl = new FormControl();
  filtro = new PessoaFiltro();
  options: string[] = [];
  filteredOptions: Observable<string[]>;
  dataSource = new MatTableDataSource();
  totalRegistros = 0;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private pessoaService: PessoaService) {}

  ngOnInit() {
    this.pesquisar();
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
    this.dataSource.paginator = this.paginator;
  }

  pesquisar() {
    this.pessoaService.pesquisar(this.filtro)
      .then(dados => {
        this.totalRegistros = dados.total;
        this.dataSource.data = dados.pessoas;
        this.options = dados.pessoas.map(value => value.nome);
      });
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

}
