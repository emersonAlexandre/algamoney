import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

export class PessoaFiltro {
  nome: string;
}

@Injectable({
  providedIn: 'root'
})

export class PessoaService {

  pessoasUrl = 'http://localhost:8080/pessoas';
  params = new HttpParams();

  constructor(private http: HttpClient) {}

  pesquisar(filtro: PessoaFiltro): Promise<any> {
    const headers = new HttpHeaders(
      {'Authorization': 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg=='}
    );

    if (filtro.nome) {
      this.params = this.params.set('nome', filtro.nome);
    }

    return this.http.get(`${this.pessoasUrl}`, {headers, params: this.params})
      .toPromise()
      .then((response: any) => {
        const resultado = {
          pessoas: response.content,
          total: response.totalElements
        };

        return resultado;
      });
  }
}
