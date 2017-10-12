import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { PostsService } from './services/posts.service';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  user: any;
  postlist: any;
  constructor(public auth: AuthService, public posts: PostsService,
  private router: Router) {

  };

  ngOnInit(){
    this.auth.getUser();
    this.auth.getLoginEventEmitter()
      .subscribe(user => {
        this.user = user
        this.posts.listPostsById(user._id)
        .subscribe(postlist => {this.postlist=postlist; console.log(this.postlist)
      });
    })
  }

  gotoProfile(){
    this.router.navigate(['user',this.user._id]);
  }

  logout(){
    this.auth.logout().subscribe(()=>this.router.navigate(['/']))
  }
}
