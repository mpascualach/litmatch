import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service'
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service'
import { ActivatedRoute } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-seepost',
  templateUrl: './seepost.component.html',
  styleUrls: ['./seepost.component.css'],
  providers: [PostsService, AuthService]
})
export class SeepostComponent implements OnInit {
  user: any;
  post: any;
  comments: Array<object>;
  creator: any;
  formInfo = {
    content: ""
  }
  title="aLitMatch";

  constructor(public Post: PostsService, private auth: AuthService,
    private route: ActivatedRoute, private router: Router) {
    this.user = this.auth.isLoggedIn();
    this.auth.getLoginEventEmitter()
      .subscribe(user => {this.user = user});
  }

  ngOnInit() {
    this.route.params
      .subscribe((params) => {
        this.Post.seePost(params.id).subscribe(post => {
          this.post = post;
          this.post.created_at1 = this.post.created_at.slice(0,10);
          this.post.created_at2 = this.post.created_at.slice(11,19);
          this.comments = post.comments;
        })
      })
  }

  gotoEdit(post){
    this.router.navigate([`/editpost/${post._id}`])
  }

  comment(post) {
    $(`.commentBox`).toggleClass("hide");
    $(".fortextarea").hide();
  }

  goBack(post) {
    $(`.commentBox`).toggleClass("hide");
    $(".fortextarea").hide();
  }

  comment2(comment){
    $(`.commentBox${comment._id}`).toggleClass("hide");
    $(".commentOnComment").hide();
  }

  goBack2(comment) {
    $(".commentOnComment").show();
    $(`.commentBox${comment._id}`).toggleClass("hide");
  }

  sendComment(post) {
    this.Post.makeComment(post._id, this.formInfo.content, this.user._id)
      .subscribe(comment => { console.log(comment); post.comments.push(comment) })
    $(".fortextarea").show()
    $(`.comment`).toggleClass("hide");
    this.router.navigate(['/'])
  }

  deleteComment(comment){
    console.log("deleting");
    this.Post.deleteComment(comment._id);
  }

  delete(post){
    this.Post.deletePost(post._id)
    .subscribe(()=>this.router.navigate(['/']))
  }

}
