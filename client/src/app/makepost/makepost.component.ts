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
  user:any;
  error: string;
  formInfo = {
    user: '',
    title: '',
    content: ''
  };
  constructor(private Post: PostsService, public auth: AuthService,
    public router: Router) {

  }

  ngOnInit() {
   this.user = this.auth.getUser();
    this.auth.getLoginEventEmitter()
        .subscribe( user =>{
          console.log(this.user);
          this.user=user });
  }

  makePost(){
    this.formInfo.user=this.user._id;
    console.log(this.user);
    this.Post.makePost(this.formInfo)
        .subscribe(
          (post) => this.successCb (post),
          (err) => this.errorCb (err)
        );
    this.router.navigate(['/']);
  }

  errorCb(err) {
    this.error = err;
    this.Post = null;
  }

  successCb(val) {
    this.Post = val;
    this.error = null;
  }

}
