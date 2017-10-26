import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

import { Router } from '@angular/router';

interface LoginForm {
  username: string;
  password: string;
}

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css'],
  providers: [AuthService]
})
export class LoginformComponent implements OnInit {
  user: any;
  formInfo: LoginForm = {
    username: "",
    password: ""
  };
  error: String;

  constructor(public auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.auth.login(this.formInfo)
      .subscribe(
      (user) => this.successCb(user),
      (err) => this.errorCb(err),
      () => this.router.navigate(['/'])
      );
  }

  errorCb(err) {
    this.error = err;
    this.user = null;
  }

  successCb(user) {
    this.user = user;
    this.error = null;
  }

}
