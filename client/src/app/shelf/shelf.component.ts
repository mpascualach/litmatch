import { Component, OnInit } from '@angular/core';
import { BooksService } from '../services/books.service'
import { AuthService } from '../services/auth.service'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shelf',
  templateUrl: './shelf.component.html',
  styleUrls: ['./shelf.component.css']
})
export class ShelfComponent implements OnInit {
  user: any;
  bookList: any;
  constructor(public books: BooksService, private auth: AuthService) {
    this.user = this.auth.isLoggedIn();
    this.auth.getLoginEventEmitter()
      .subscribe(user => {this.user = user});
  }

  ngOnInit() {
  }

  showBooks(){
    for (var i = 0; i < 5; i++){

    }
  }

}
