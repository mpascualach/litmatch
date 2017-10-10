import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service'
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import * as $ from 'jquery'




@Component({
  selector: 'app-allposts',
  templateUrl: './allposts.component.html',
  styleUrls: ['./allposts.component.css'],
  providers: [PostsService, AuthService]
})
export class AllpostsComponent implements OnInit {
  user:any;
  posts;
  post;
  title = 'LitMatch';
  constructor(private Post: PostsService, public auth: AuthService,
    public router: Router) {
    this.user = this.auth.getUser();
    this.auth.getLoginEventEmitter()
        .subscribe( user => this.user=user );
  }

  ngOnInit() {
    this.Post.listPosts()
      .subscribe((posts) => {
        this.posts = posts;
      });
  }

  makePost(){
    this.router.navigate(['makepost']);
  }

  show(){
    $(".content").toggleClass("truncate");
  }

  comment(post){
    console.log(post._id);
    $(`.indivpost${post._id} > .comment`).toggleClass("hide");
    $(".fortextarea").hide();
  }

  goBack(post){
    $(".fortextarea").show()
    $(`.indivpost${post._id} > .comment`).toggleClass("hide");
  }

  sendComment(post){

  }

}
