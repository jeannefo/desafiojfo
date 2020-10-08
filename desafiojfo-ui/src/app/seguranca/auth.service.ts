import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  oauthTokenUrl = 'http://localhost:8080/oauth/token';

  constructor(private http: HttpClient) { }

  autenticar(usuario: string, senha: string) {
    let params = new HttpParams();
    params.append('username', usuario);
    params.append('password', senha);
    params.append('grant_type', 'password');
    params.append('client_id', 'angular');

    let headers =
      new HttpHeaders({
        'Content-type': 'application/x-www-form-urlencoded; charset=utf-8',
        'Authorization': 'Basic ' + btoa('angular:@ngul@r')
      });

    this.http.post(this.oauthTokenUrl,
      params.toString(), { headers })
      .subscribe(
        data => console.log(data),
        err => alert('Invalid Credentials'));

    /*

            const headers = new HttpHeaders();
        headers.append('Content-Type', 'application/x-www-form-urlencoded')
        headers.append('Authorization', 'Basic YW5ndWxhcjpAbmd1bEByMA==');

        let body: HttpParams = new HttpParams();
        body = body.append('grant_type', 'password');
        body = body.append('username', usuario);
        body = body.append('password', senha);
        body = body.append('client', 'angular');

        return this.http.post(this.oauthTokenUrl,
          { headers, params: body })
          .toPromise()
          .then(response => {
            console.log(response);
          })
          .catch(response => {
            console.log(response);
            return Promise.reject(response);
          });
    */

  }

}
