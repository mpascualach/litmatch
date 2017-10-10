import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-makepost',
  templateUrl: './makepost.component.html',
  styleUrls: ['./makepost.component.css'],
  providers: [PostsService, AuthService]
})
export class MakepostComponent implements OnInit {
  user: any;
  error: string;
  formInfo = {
    user: '',
    title: '',
    content: ''
  };
  constructor(private posts: PostsService, public auth: AuthService,
    public router: Router) {

  }

  ngOnInit() {
    this.user = this.auth.isLoggedIn().subscribe(user => this.user = user);
    this.auth.getLoginEventEmitter()
      .subscribe(user => {
        console.log(this.user);
        this.user = user
      });
    this.posts.listPostsById()
  }

  makePost() {
    this.formInfo.user = this.user._id;
    this.posts.makePost(this.formInfo)
      .subscribe(
      (post) => this.successCb(post),
      (err) => this.errorCb(err)
      );
  }

  errorCb(err) {
    this.error = err;
    this.posts = null;
    this.router.navigate(['/makepost']);
  }

  successCb(val) {
    this.posts = val;
    this.error = null;
    this.router.navigate(['/']);
  }

}
