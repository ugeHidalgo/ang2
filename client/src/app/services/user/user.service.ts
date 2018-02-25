import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
// import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { catchError, map, tap } from 'rxjs/operators';

import { User } from '../../models/user';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable()
export class UserService {

  private server = 'http://192.168.1.104:3000/';
  // private server = 'http://localhost:3000/';
  private userUrl  = this.server + 'api/user';

  constructor( private http: HttpClient) { }

  /**.*/
  registerUser(user: User): Observable<User> {
    const body = JSON.stringify(user);
    return this.http.post<User>(this.userUrl, user, httpOptions);
  }

  /**.*/
  getUser(userName: string): Observable<User> {
    const me = this,
        getUserUrl = `${me.userUrl}/?username=${userName}`,
        user = me.http.get<User>(getUserUrl);
    return user;
  }

   // Private methods -------------
}

