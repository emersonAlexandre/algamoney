import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-datatable-lancamentos',
  templateUrl: './datatable-lancamentos.component.html',
  styleUrls: ['./datatable-lancamentos.component.css']
})
export class DatatableLancamentosComponent implements OnInit {

  @Input() displayedColumns = [];
  @Input() dataSource = new MatTableDataSource;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

}
