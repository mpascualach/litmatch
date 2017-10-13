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
    this.user = this.auth.getUser();
    this.auth.getLoginEventEmitter()
      .subscribe(user => this.user = user);
  }

  ngOnInit() {
    this.Post.listPosts()
      .subscribe((posts) => {
        this.posts = posts;
        posts.forEach(post => {
          if (post.creator._id === this.user._id){
            $(".editing").toggleClass("hide");
          }
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
