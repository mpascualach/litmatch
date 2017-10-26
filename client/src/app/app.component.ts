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
  searchText: any
  postlist: any;

  constructor(public auth: AuthService, public posts: PostsService,
  private router: Router) {
    this.auth.isLoggedIn();
    this.auth.getLoginEventEmitter()
      .subscribe(user => {
        this.user = user;
        console.log(this.user);
        this.posts.listPostsById(user._id)
        .subscribe(postlist => {this.postlist=postlist});
    })
  };

  ngOnInit(){
    this.auth.getUser();
    console.log(this.user)
  }

  goHome(){
    this.router.navigate([''])
  }

  gotoSearch(){
    this.searchText = $("#search").val();
    this.router.navigate([`search/${this.searchText}`]);
  }

  gotoProfile(){
    this.router.navigate(['user',this.user._id]);
  }

  gotoShelf(){
    this.router.navigate(['shelf',this.user._id])
  }

  logout(){
    this.auth.logout().subscribe(()=>this.router.navigate(['login']))
  }
}
