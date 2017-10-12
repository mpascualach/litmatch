import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { PostsService } from '../services/posts.service';
import { IsLoggedInService } from '../services/isLoggedIn.canactivate.service';

import { Router } from '@angular/router';

interface Editprofile {
  username: string;
  password: string;
  email: string;
  location: string;
  favouriteGenre: string;
}

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css'],
  providers: [AuthService, PostsService]
})

export class EditprofileComponent implements OnInit {
  user: any;
  posts: any;
  postlist: any;
  formInfo = {
    username: "",
    password: "",
    email: "",
    location: "",
    favouriteGenre: ""
  };
  error: String;
  constructor(public auth: AuthService, public Post: PostsService, public router: Router) {

  }

  ngOnInit() {
    this.auth.isLoggedIn()
    .subscribe(user => {
      this.user = user;
      this.posts.listPostsById()
      .subscribe(postlist => {console.log(postlist); this.postlist=postlist})
    });
    this.auth.getLoginEventEmitter()
      .subscribe(user => {
        this.formInfo = {
          username: user.username,
          password: user.password,
          email: user.email,
          location: user.location,
          favouriteGenre: user.favouriteGenre
        }
      });
      console.log(this.user)
  }

  editUser() {
    this.auth.editUser(this.user._id, this.formInfo)
      .subscribe(
      (user) => this.successCb(user),
      (err) => this.errorCb(err)
      );
  }

  errorCb(err) {
    this.error = err;
    this.user = null;
  }

  successCb(user) {
    this.user = user;
    this.error = null;
    this.router.navigate(['user']);
  }

}
