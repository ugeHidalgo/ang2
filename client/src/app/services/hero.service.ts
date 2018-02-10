import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Hero } from '../models/hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';


const httpOtions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable()
export class HeroService {

  private server = 'http://192.168.1.104:3000/';
  private heroesUrl  = this.server + 'api/heroes';

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  getHeroes(): Observable<Hero[]> {
    const me = this;
    return me.http.get<Hero[]>(me.heroesUrl)
              .pipe(
                tap(heroes => me.log('Heroes fetched.')),
                catchError(me.handleError('getHeroes', []))
              );
  }

  getHero(id: string): Observable<Hero> {
    const me = this,
        getHeroByIdUrl = `${me.heroesUrl}/${id}`,
        hero = me.http.get<Hero>(getHeroByIdUrl)
                      .pipe(
                        tap(_ => me.log(`Hero with id ${id} was fetched.`)),
                        catchError(me.handleError<Hero>(`getHero (id:${id}`))
                      );
    return hero;
  }

   // Private methods -------------


   /**
   * @param message - Message to be added to the list.
   */
   private log(message: string): void {
    this.messageService.add('HeroService: ' + message );
  }

  /**
   * @param operation - name of the operation that failed.
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T){
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
