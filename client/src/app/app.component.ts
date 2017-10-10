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
  post: any;
  constructor(private auth: AuthService, private posts: PostsService) {
  };

  ngOnInit(){
    this.auth.isLoggedIn().subscribe(user => {
      this.user = user
    })
    this.auth.getLoginEventEmitter()
      .subscribe(user => {
        console.log(this.user)
        this.user = user
      });
    this.posts.listPostsById().subscribe(result => console.log(result))
  }
}
