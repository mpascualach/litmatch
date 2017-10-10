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
  constructor(private posts: PostsService, public auth: AuthService,
    private route : ActivatedRoute, private router: Router) {
    this.user = this.auth.getUser();
    this.auth.getLoginEventEmitter()
        .subscribe( user => this.user=user );
       }

  ngOnInit() {
    this.route.params
      .subscribe((params) => {
        console.log(params);
        this.posts.seePost(params.id).subscribe(post => this.post = post);
      })
  }

}
