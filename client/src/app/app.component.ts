import { Component } from '@angular/core';
import { GlobalsService } from './services/globals/globals.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'Heroes Management App';

  constructor ( protected globals: GlobalsService ) {
    const me = this,
          username = me.globals.getUserNameFromLocalStorage();

    me.globals.setUser(username);
  }

  logout() {
    this.globals.clearUser();
    this.globals.removeUserDataFromLocalStorage();
  }
}
