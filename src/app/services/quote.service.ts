import {Inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Quote} from '../domain/quote.model';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {debug} from 'util';

@Injectable()
export class QuoteService {
  constructor(private http: HttpClient, @Inject('BASE_CONFIG') private config: { uri: string }) {

  }

  getQuote(): Observable<Quote> {
    const url = `${this.config.uri}/quotes/${Math.floor(Math.random() * 10)}`;
    return this.http.get(url).pipe(map(res => res as Quote), debug('quote: '));
  }
}
