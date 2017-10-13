import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-seeuser',
  templateUrl: './seeuser.component.html',
  styleUrls: ['./seeuser.component.css']
})
export class SeeuserComponent implements OnInit {
  user: any;
  subjectUser:any;
  constructor(public auth: AuthService, private route: ActivatedRoute,
    private router: Router) {

      }

  ngOnInit() {
    this.user = this.auth.isLoggedIn();
    this.auth.getLoginEventEmitter()
      .subscribe(user => {
        this.user = user
      })

    this.route.params
      .subscribe((params) => {
        this.auth.seeUser(params['id']).subscribe(user => {
          this.subjectUser = user;
          console.log(this.subjectUser);
        })
      })
    }

    gotoEdit(){
      console.log("editing...");
      $(".userProfile").hide();
      this.router.navigate(['user',this.user._id,'edit'])
    }
  }
