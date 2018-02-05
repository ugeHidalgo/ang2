import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Hero } from '../models/hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';


@Injectable()
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: Heroes data fetched successfully !');
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    this.messageService.add(`HeroService: Data fetched successfully for hero with id ${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }

}