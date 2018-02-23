import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Hero } from '../models/hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable()
export class HeroService {

  private server = 'http://192.168.1.104:3000/';
  // private server = 'http://localhost:3000/';
  private heroesUrl  = this.server + 'api/heroes';
  private heroUrl  = this.server + 'api/hero';

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  /**.*/
  getHeroes(): Observable<Hero[]> {
    const me = this;

    return me.http.get<Hero[]>(me.heroesUrl)
              .pipe(
                tap(heroes => me.log('Heroes fetched.')),
                catchError(me.handleError('getHeroes', []))
              );
  }

  /**.*/
  addHero(hero: Hero): Observable<Hero> {
    const body = JSON.stringify(hero);
    return this.http.post<Hero>(this.heroesUrl, hero, httpOptions)
              .pipe(
                // tslint:disable-next-line:no-shadowed-variable
                tap((hero: Hero) => this.log(`Hero with id ${hero._id} was created.`)),
                catchError(this.handleError<Hero>('addHero: failed to create new hero.'))
              );
  }

  /**.*/
  deleteHero(hero: Hero | number): Observable<Hero> {
    const me = this,
          id = typeof hero === 'number' ? hero : hero._id,
          deleteHeroUrl = `${me.heroesUrl}/${id}`;

    return me.http.delete<Hero>(deleteHeroUrl, httpOptions)
              .pipe(
                tap(_ => me.log(`Hero with id ${id} was deleted.`)),
                catchError(me.handleError<any>(`deleteHero (id:${id})`))
              );
  }

  /**.*/
  getHeroById(id: string): Observable<Hero> {
    const me = this,
        getHeroByIdUrl = `${me.heroUrl}/?id=${id}`,
        hero = me.http.get<Hero>(getHeroByIdUrl)
                      .pipe(
                        tap(_ => me.log(`Hero with id ${id} was fetched.`)),
                        catchError(me.handleError<Hero>(`getHeroById (id:${id}`))
                      );
    return hero;
  }

  /**.*/
  updateHero(hero: Hero): Observable<any> {

    const me = this,
          updatedHero = me.http.post<Hero>(me.heroesUrl, hero, httpOptions)
                        .pipe(
                          tap(_ => me.log(`Hero with id ${hero._id} was updated.`)),
                          catchError(me.handleError<any>(`updateHero (id:${hero._id}`))
                        );

    return updatedHero;
  }

  /**.*/
  filterHeroes(term: string): Observable<Hero[]> {
    const me = this;
    let getHeroByNameUrl;

    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }

    getHeroByNameUrl = `${me.heroUrl}/?name=${term}`;

    return me.http.get<Hero[]>(getHeroByNameUrl)
          .pipe(
            tap(heroes => me.log(`Found heroes ${heroes.length} matching ${term}`)),
            catchError(me.handleError<Hero[]>('filterHeroes', []))
          );
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
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
