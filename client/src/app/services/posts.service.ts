import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http} from '@angular/http';
import 'rxjs';
import {environment} from '../../environments/environment';

const BASEURL = environment.BASEURL + "/post";

@Injectable()
export class PostsService {
  private user:object;
  post: object;
  options : {withCredentials:true };
  constructor(private http: Http) { }

  private handleError(e) {
    console.log("POST ERROR");
    return Observable.throw(e.json().message);
  }

  listPosts(){
    return this.http.get(`${BASEURL}/list`, this.options)
      .map(res => res.json())
      .catch(this.handleError);
  }

  seePost(id){
    return this.http.get(`${BASEURL}/${id}`, this.options)
      .map(res => res.json())
      .catch(this.handleError);
  }

  makePost(post){
    return this.http.post(`${BASEURL}/makepost`, post, this.options)
    .map(res => res.json())
    .catch(this.handleError);
  }

  listPostsById(){
    return this.http.get(`${BASEURL}/listbyId`)
    .map(res => res.json())
    .catch(this.handleError);
  }

}
