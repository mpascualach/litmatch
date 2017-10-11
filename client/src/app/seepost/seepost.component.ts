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

  constructor(private Post: PostsService, public auth: AuthService,
    private route: ActivatedRoute, private router: Router) {
    this.user = this.auth.getUser();
    this.auth.getLoginEventEmitter()
      .subscribe(user => this.user = user);
  }

  ngOnInit() {
    this.route.params
      .subscribe((params) => {
        this.Post.seePost(params.id).subscribe(post => {
          this.post = post;
          this.comments = post.comments;
          
          // if (post.creator!=this.user._id){
          //   console.log("toggling");
          //   $(".editing").hide()
          // }
        })
      })
  }

  alternateColor(){
    for (var i = 0; i < this.comments.length; i++){
      if (i % 2 === 0){
        $(".indiv").attr("background-color","blue")
      }
      else {
        $(".indiv").attr("background-color","purple")
      }
    }
  }

  gotoEdit(post){
    this.router.navigate([`/editpost/${post._id}`])
  }

  comment(post) {
    $(`.commentBox`).toggleClass("hide");
    $(".fortextarea").hide();
  }

  goBack(post) {
    $(".fortextarea").show()
    $(`.comment`).toggleClass("hide");
  }

  sendComment(post) {
    this.Post.makeComment(post._id, this.formInfo.content, this.user._id)
      .subscribe(comment => { console.log(comment); post.comments.push(comment) })
    $(".fortextarea").show()
    $(`.comment`).toggleClass("hide");
    this.router.navigate(['/'])
  }

}
