import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { PostsService } from '../services/posts.service';
import { IsLoggedInService } from '../services/isLoggedIn.canactivate.service';

import { Router } from '@angular/router';

interface Editprofile {
  username: string;
  email: string;
  location: string;
  favouriteGenre: string;
  favouriteBook: string;
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
    email: "",
    location: "",
    favouriteGenre: "",
    favouriteBook:" "
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
          email: user.email,
          location: user.location,
          favouriteGenre: user.favouriteGenre,
          favouriteBook: user.favouriteBook,
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
      this.router.navigate(['/'])
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
