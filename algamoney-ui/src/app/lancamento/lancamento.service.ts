import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import * as moment from 'moment';

export class LancamentoFiltro {
  descricao: string;
  dataVencimentoInicio: Date;
  dataVencimentoFim: Date;
}

@Injectable({
  providedIn: 'root'
})

export class LancamentoService {

  lancamentosUrl = 'http://localhost:8080/lancamentos';
  params = new HttpParams();

  constructor(private http: HttpClient) {}

  pesquisar(filtro: LancamentoFiltro): Promise<any> {
    const headers = new HttpHeaders(
      {'Authorization': 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg=='}
    );

    if (filtro.descricao) {
      this.params = this.params.set('descricao', filtro.descricao);
    }

    if (filtro.dataVencimentoInicio) {
      this.params = this.params.set('dataVencimentoDe', moment(filtro.dataVencimentoInicio).format('YYYY-MM-DD'));
    }

    if (filtro.dataVencimentoFim) {
      this.params = this.params.set('dataVencimentoAte', moment(filtro.dataVencimentoFim).format('YYYY-MM-DD'));
    }

    return this.http.get(`${this.lancamentosUrl}?resumo`, {headers, params: this.params})
      .toPromise()
      .then((response: any) => {
        const resultado = {
          lancamentos: response.content,
          total: response.totalElements
        };

        return resultado;
      });
  }
}
