import { Injectable, EventEmitter } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http} from '@angular/http';
import 'rxjs';
import {environment} from '../../environments/environment';

@Injectable()
export class BooksService {
  booksUpdate: EventEmitter<any> = new EventEmitter();

  constructor(private http: Http) { }

  private handleError(e) {
    console.log("POST ERROR");
    return Observable.throw(e.json().message);
  }

  public getBooksUpdate(){
    return this.booksUpdate;
  }

  bookSearch(a){
    a = a.split("").join("+");
    return this.http.get(`https://www.googleapis.com/books/v1/volumes?q=${a}`)
    .map(res => res.json())
    .catch(this.handleError)
  }

}
