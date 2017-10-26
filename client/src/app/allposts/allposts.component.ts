import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service'
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-allposts',
  templateUrl: './allposts.component.html',
  styleUrls: ['./allposts.component.css'],
  providers: [PostsService, AuthService]
})
export class AllpostsComponent implements OnInit {
  user: any;
  posts: any;
  post: any;
  title = 'LitMatch';
  formInfo = {
    content: ""
  }
  constructor(private Post: PostsService, public auth: AuthService,
    public router: Router) {
    this.auth.isLoggedIn();
    this.auth.getLoginEventEmitter()
      .subscribe(user => {this.user = user;});
  }

  ngOnInit() {
    this.Post.listPosts()
      .subscribe((posts) => {
        this.posts = posts;
        posts.forEach(post => {
          post.created_at1 = post.created_at.slice(0,10);
          post.created_at2 = post.created_at.slice(11,19);
        })
      });
  }

  makePost() {
    this.router.navigate(['makepost']);
  }

  gotoSignUp() {
    this.router.navigate(['signup'])
  }

  show() {
    $(".content").toggleClass("truncate");
  }

  comment(post) {
    console.log(post._id);
    $(`.indivpost${post._id} > .comment`).toggleClass("hide");
    $(".fortextarea").hide();
  }

  goBack(post) {
    $(".fortextarea").show()
    $(`.indivpost${post._id} > .comment`).toggleClass("hide");
  }

  sendComment(post) {
    this.Post.makeComment(post._id, this.formInfo.content, this.user._id)
      .subscribe(comment => { console.log(comment); post.comments.push(comment) })
    $(".fortextarea").show()
    $(`.indivpost${post._id} > .comment`).toggleClass("hide");
  }

}
