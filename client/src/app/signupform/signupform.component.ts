import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-signupform',
  templateUrl: './signupform.component.html',
  styleUrls: ['./signupform.component.css'],
  providers: [AuthService]
})
export class SignupformComponent implements OnInit {
  user: any;
  formInfo = {
    username: "",
    password: "",
    email: ""
  }
  title="aLitMatch"
  error: string;
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  signup() {
    this.auth.signup(this.formInfo)
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
    this.error = null;
    this.user = user;
  }

}
