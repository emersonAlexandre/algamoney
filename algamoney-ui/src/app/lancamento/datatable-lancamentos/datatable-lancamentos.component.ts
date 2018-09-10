import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource, PageEvent} from '@angular/material';

@Component({
  selector: 'app-datatable-lancamentos',
  templateUrl: './datatable-lancamentos.component.html',
  styleUrls: ['./datatable-lancamentos.component.css']
})

export class DatatableLancamentosComponent implements OnInit {

  @Input() displayedColumns = [];
  @Input() dataSource = new MatTableDataSource;
  @Input() totalRegistros = 0;
  pageEvent = new PageEvent();

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    const btnPrevious = document.querySelector('.mat-paginator-navigation-previous') as HTMLButtonElement;
    const btnNext = document.querySelector('.mat-paginator-navigation-next') as HTMLButtonElement;
    const that = this;
    btnPrevious.addEventListener('click', function () {
      console.log(that.pageEvent.pageIndex);
    });
    btnNext.addEventListener('click', function () {
      console.log(that.pageEvent.pageIndex);
    });
  }
}
