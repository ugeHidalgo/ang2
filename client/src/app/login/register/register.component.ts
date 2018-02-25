import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr';

import { UserService } from '../../services/user/user.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User = new User();
  loading = false;

  constructor(private userService: UserService, public toastr: ToastsManager, vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
 }

  ngOnInit() {
  }

  register() {
    const me = this;

    me.loading = true;
    me.userService.registerUser(me.user)
      .subscribe(
        newUserAdded => {
          me.toastr.success(`User ${newUserAdded.username} was successfully added.`);
        },
        error => {
          me.toastr.error(error);
          me.loading = false;
        }
      );
  }
}
