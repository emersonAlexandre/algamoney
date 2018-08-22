import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-datatable-pessoas',
  templateUrl: './datatable-pessoas.component.html',
  styleUrls: ['./datatable-pessoas.component.css']
})
export class DatatablePessoasComponent implements OnInit {

  @Input() displayedColumns = [];
  @Input() dataSource = new MatTableDataSource;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

}
