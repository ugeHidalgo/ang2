import { Injectable } from '@angular/core';

@Injectable()
export class GlobalsService {

  userNameLogged: string;

  constructor() { }

  setUser(userName: string) {
    const me = this;
    me.userNameLogged = userName;
  }

  clearUser() {
    const me = this;
    me.userNameLogged = undefined;
  }

}
