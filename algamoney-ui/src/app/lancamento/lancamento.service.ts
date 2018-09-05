import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';


export interface  LancamentoFiltro {
  descricao: string;
}

@Injectable({
  providedIn: 'root'
})

export class LancamentoService {

  lancamentosUrl = 'http://localhost:8080/lancamentos';
  params = new HttpParams();

  constructor(private http: HttpClient) {
  }

  pesquisar(filtro: LancamentoFiltro): Promise<any> {
    const headers = new HttpHeaders(
      {'Authorization': 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg=='}
    );

    if (filtro.descricao) {
      this.params = this.params.set('descricao', filtro.descricao);
    }

    return this.http.get(`${this.lancamentosUrl}?resumo`, {headers, params: this.params})
      .toPromise()
      .then((response: any) => response.content);
  }
}
