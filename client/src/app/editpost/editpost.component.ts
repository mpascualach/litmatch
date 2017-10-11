import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { AuthService } from '../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-editpost',
  templateUrl: './editpost.component.html',
  styleUrls: ['./editpost.component.css'],
  providers: [PostsService, AuthService]
})
export class EditpostComponent implements OnInit {
  user: any;
  post: any;
  error: string;
  formInfo = {
    user: '',
    title: '',
    content: '',
    category: ''
  };
  categories:Array<string> = ["literature","exchange","writing"]
  constructor(private Post: PostsService, public auth: AuthService,
    private route: ActivatedRoute, public router: Router) { }

  ngOnInit() {
    this.user = this.auth.isLoggedIn().subscribe(user => this.user = user);
    this.auth.getLoginEventEmitter()
      .subscribe(user => {
        this.user = user
      });
    this.Post.listPostsById();
    this.route.params
      .subscribe((params) => {
        this.Post.seePost(params.id).subscribe(post => {
          this.post = post;
        })
      })
    $("editTitle").on("change", function(){
      $("editTitle").removeAttr("color")
    })
    }
}
