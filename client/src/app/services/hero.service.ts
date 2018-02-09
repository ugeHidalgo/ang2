import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Hero } from '../models/hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';


@Injectable()
export class HeroService {

  private server = 'http://192.168.1.104:3000/';
  private heroesUrl  = 'api/heroes';

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  getHeroes(): Observable<Hero[]> {
    const me = this;

    me.messageService.add('HeroService: Heroes data fetched successfully !');
    // return of(HEROES);
    return me.http.get<Hero[]>(me.server + me.heroesUrl);
  }

  getHero(id: number): Observable<Hero> {
    this.messageService.add(`HeroService: Data fetched successfully for hero with id ${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }

  /** Private methods */
  private log(message: string) {
    this.messageService.add('client.hero.service: ' + message);
  }
}
