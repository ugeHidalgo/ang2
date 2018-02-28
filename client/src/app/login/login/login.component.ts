import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { ToastsManager } from 'ng2-toastr';

import { UserService } from '../../services/user/user.service';
import { GlobalsService } from '../../services/globals/globals.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};
  loading = false;

  constructor(
    private router: Router,
    protected globals: GlobalsService,
    private userService: UserService,
    public toastr: ToastsManager,
    vcr: ViewContainerRef ) {
    this.toastr.setRootViewContainerRef(vcr);
 }

  ngOnInit() {
  }

  login() {
    const me = this;

    me.loading = true;
    me.userService.isUserAuthenticated(me.model)
      .subscribe(
        data => {
          me.globals.setUser(me.model.userName);
          me.router.navigate(['/dashboard']);
        },
        error => {
          me.toastr.error('Username/Password are not correct.');
          me.loading = false;
          me.globals.clearUser();
        }
      );
  }
}
