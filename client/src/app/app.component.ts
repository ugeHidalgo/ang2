import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalsService } from './services/globals/globals.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'Heroes Management App';

  constructor ( protected globals: GlobalsService, private router: Router ) {
    const me = this,
          username = me.globals.getUserNameFromLocalStorage();

    me.globals.setUser(username);
  }

  logout() {
    const me = this;

    me.globals.clearUser();
    me.globals.removeUserDataFromLocalStorage();
    me.router.navigate(['/']);
  }
}
