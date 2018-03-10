import { Component } from '@angular/core';
import { GlobalsService } from './services/globals/globals.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'Heroes Management App';

  constructor ( protected globals: GlobalsService ) {}

  logout() {
    this.globals.clearUser();
    this.globals.removeUserDataFromLocalStorage();
  }
}
