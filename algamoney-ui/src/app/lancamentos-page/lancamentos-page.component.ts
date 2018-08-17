import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort} from '@angular/material';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {MyTableDataSource} from './my-table-datasource';

@Component({
  selector: 'app-lancamentos-page',
  templateUrl: './lancamentos-page.component.html',
  styleUrls: ['./lancamentos-page.component.css']
})
export class LancamentosPageComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: MyTableDataSource;
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;
  displayedColumns = ['pessoa', 'descricao', 'dataVencimento', 'dataPagamento', 'valor', 'acoes'];

  ngOnInit() {
    this.dataSource = new MyTableDataSource(this.paginator, this.sort);
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
