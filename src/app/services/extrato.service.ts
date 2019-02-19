import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Headers } from '@angular/http';
import { RequestOptions } from '@angular/http';

import { map } from 'rxjs/operators';

import { Extrato } from './extrato';
import { ConfigService } from './config.service';

@Injectable()
export class ExtratoService {

  private baseUrlService = '';
  private headers: Headers;
  private options: RequestOptions;

  constructor(private http: Http, private configService: ConfigService) {

    /** SETANDO A URL DO SERVIÇO REST QUE VAI SER ACESSADO */
    this.baseUrlService = configService.getUrlService() + '/extrato/';

    /*ADICIONANDO O JSON NO HEADER */
    this.headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
    this.options = new RequestOptions({ headers: this.headers });
  }

  /** CONSULTA EXTRATO */
  getExtratos() {
    return this.http.get(this.baseUrlService).pipe(map(res => res.json()));
  }



}
