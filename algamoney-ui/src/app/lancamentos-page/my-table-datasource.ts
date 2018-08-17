import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface MyTableItem {
  tipo: string;
  descricao: string;
  dataVencimento: Date;
  dataPagamento: Date;
  valor: number;
  pessoa: string;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: MyTableItem[] = [
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
    dataPagamento: null, valor: 180, pessoa: 'Academia Top' }
];

/**
 * Data source for the MyTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class MyTableDataSource extends DataSource<MyTableItem> {
  data: MyTableItem[] = EXAMPLE_DATA;

  constructor(private paginator: MatPaginator, private sort: MatSort) {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<MyTableItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    // Set the paginators length
    this.paginator.length = this.data.length;

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: MyTableItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: MyTableItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'pessoa': return compare(a.pessoa, b.pessoa, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
