import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { PostsService } from './services/posts.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  user: object;
  postlist: any;
  constructor(public auth: AuthService, public posts: PostsService) {
  };

  ngOnInit(){
    this.auth.isLoggedIn()
    .subscribe(user => {
      this.user = user
      this.posts.listPostsById()
      .subscribe(postlist => {console.log(postlist); this.postlist=postlist})
    });
  }
}
