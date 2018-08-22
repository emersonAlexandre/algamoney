import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

export interface Pessoa {
  nome: string;
  cidade: string;
  estado: string;
  ativo: boolean;
}

// TODO: replace this with real data from your application
const ELEMENT_DATA: Pessoa[] = [
  { nome: 'Manoel Pinheiro', cidade: 'Uberlândia', estado: 'MG', ativo: true },
  { nome: 'Sebastião da Silva', cidade: 'São Paulo', estado: 'SP', ativo: false },
  { nome: 'Carla Souza', cidade: 'Florianópolis', estado: 'SC', ativo: true },
  { nome: 'Luís Pereira', cidade: 'Curitiba', estado: 'PR', ativo: true },
  { nome: 'Vilmar Andrade', cidade: 'Rio de Janeiro', estado: 'RJ', ativo: false },
  { nome: 'Paula Maria', cidade: 'Uberlândia', estado: 'MG', ativo: true }
];

@Component({
  selector: 'app-pessoas-page',
  templateUrl: './pessoas-page.component.html',
  styleUrls: ['./pessoas-page.component.css']
})
export class PessoasPageComponent implements OnInit {
  dataSource = new MatTableDataSource<Pessoa>(ELEMENT_DATA);
  myControl = new FormControl();
  options: string[] = ['Manoel Pinheiro', 'Sebastião da Silva', 'Carla Souza', 'Luís Pereira', 'Vilmar Andrade'];
  filteredOptions: Observable<string[]>;
  displayedColumns = ['nome', 'cidade', 'estado', 'ativo', 'acoes'];

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
