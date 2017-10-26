import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PostsService } from '../services/posts.service'

@Component({
  selector: 'app-searches',
  templateUrl: './searches.component.html',
  styleUrls: ['./searches.component.css']
})
export class SearchesComponent implements OnInit {
  title="aLitMatch";
  posts: any;
  search: any;
  constructor(private Post: PostsService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe((params) => {
        this.search = params.id;
        this.Post.search(params.id).subscribe(posts => {
          this.posts = posts;
          this.search = params.id;
          posts.forEach(entry => {
            entry.created_at1 = entry.created_at.slice(0,10);
            entry.created_at2 = entry.created_at.slice(11,19);
          })
        })
      })
  }

}
