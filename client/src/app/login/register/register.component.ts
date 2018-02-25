import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User = new User();
  loading = false;

  constructor() { }

  ngOnInit() {
  }

  register() {
    const me = this;

    me.loading = true;
  }
}
