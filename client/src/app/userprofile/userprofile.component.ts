import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { IsLoggedInService } from '../services/isLoggedIn.canactivate.service'
import { Router } from '@angular/router';
import * as $ from 'jquery'

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css'],
  providers: [AuthService]
})
export class UserprofileComponent implements OnInit {
  user:any;
  constructor(public auth:AuthService, public router: Router) {
    this.user = this.auth.getUser();
    this.auth.getLoginEventEmitter()
        .subscribe( user => this.user=user );
  }

  ngOnInit() {
  }

  edit(){
    this.router.navigate(['user', this.user._id, 'edit']);
    $("#userCard").hide();
  }
}
