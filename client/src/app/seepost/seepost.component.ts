import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service'
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-seepost',
  templateUrl: './seepost.component.html',
  styleUrls: ['./seepost.component.css'],
  providers: [PostsService, AuthService]
})
export class SeepostComponent implements OnInit {
  user:any;
  post:any;
  comments: Array<String>;
  formInfo = {
    content: ""
  }
  constructor(private Post: PostsService, public auth: AuthService,
    private route : ActivatedRoute, private router: Router) {
    this.user = this.auth.getUser();
    this.auth.getLoginEventEmitter()
        .subscribe( user => this.user=user );
       }

  ngOnInit() {
    this.route.params
      .subscribe((params) => {
        this.Post.seePost(params.id).subscribe(post => {this.post = post; this.comments = this.post.comments; console.log(this.comments)})
      })
  }

  comment(post){
    $(`.comment`).toggleClass("hide");
    $(".fortextarea").hide();
  }

  goBack(post){
    $(".fortextarea").show()
    $(`.comment`).toggleClass("hide");
  }

  sendComment(post){
    this.Post.makeComment(post._id, this.formInfo.content, this.user._id)
    .subscribe(comment => {console.log(comment); post.comments.push(comment)})
    $(".fortextarea").show()
    $(`.indivpost${post._id} > .comment`).toggleClass("hide");
  }

}
