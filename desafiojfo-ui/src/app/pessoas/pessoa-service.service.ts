import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Pessoa } from '../core/model';
import * as moment from 'moment';

export class PessoaFilter {
  nome: string;
  cpf: string;
  sexo: string;
  pagina = 0;
  itensPorPagina = 2;
}

@Injectable()
export class PessoaServiceService {

  readonly pessoasUrl = 'http://localhost:8080/pessoas';
  readonly token = 'Basic YWRtaW46YWRtaW4=';

  constructor(private http: HttpClient) { }

  pesquisar(filtro: PessoaFilter): Promise<any> {
    let params = new HttpParams();
    const headers = new HttpHeaders().append('Authorization', this.token);

    params = params.set('page', filtro.pagina.toString());
    params = params.set('size', filtro.itensPorPagina.toString());

    if (filtro.nome) {
      params = params.set('nome', filtro.nome);
    }

    if (filtro.cpf) {
      params = params.set('cpf', filtro.cpf);
    }

    if (filtro.sexo) {
      params = params.set('sexo', filtro.sexo);
    }
    return this.http.get(`${this.pessoasUrl}`, { headers, params })
      .toPromise()
      .then(response => {
        const pessoas = response['content'];
        const resultado = {
          pessoas,
          total: response['totalElements']
        };
        return resultado;
      });

  }

  excluir(codigo: number): Promise<void> {
    const headers = new HttpHeaders().append('Authorization', this.token);

    return this.http.delete(`${this.pessoasUrl}/${codigo}`, { headers })
      .toPromise()
      .then(() => null);
  }

  adicionar(pessoa: Pessoa): Promise<Pessoa> {
    const headers = new HttpHeaders();
    headers.append('Authorization', this.token);
    headers.append('Content-Type', 'application/json');
    return this.http.post<Pessoa>(
      this.pessoasUrl, pessoa, { headers })
      .toPromise();
  }

  atualizar(pessoa: Pessoa): Promise<Pessoa> {
    const headers = new HttpHeaders();
    headers.append('Authorization', this.token);
    headers.append('Content-Type', 'application/json');

    return this.http.put(`${this.pessoasUrl}/${pessoa.codigo}`,
      JSON.stringify(pessoa), { headers })
      .toPromise()
      .then(response => {
        const pessoaAlterada = response['content'] as Pessoa;

        return pessoaAlterada;
      });
  }

  buscarPorCodigo(codigo: string): Promise<Pessoa> {
    const headers = new HttpHeaders();
    headers.append('Authorization', this.token);
    headers.append('Content-Type', 'application/json');

    return this.http.get(`${this.pessoasUrl}/${codigo}`, { headers })
      .toPromise()
      .then(response => {
        const pessoa = response as Pessoa;
        return pessoa;
      });
  }

  buscarOpcoesSexo(): Promise<any> {
    const headers = new HttpHeaders();
    headers.append('Authorization', this.token);
    headers.append('Content-Type', 'application/json');

    return this.http.get(`${this.pessoasUrl}/sexos`, { headers })
      .toPromise()
      .then(sexos => {
        return sexos;
      });
  }

}
