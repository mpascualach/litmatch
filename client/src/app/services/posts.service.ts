import { Injectable, EventEmitter } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http} from '@angular/http';
import 'rxjs';
import {environment} from '../../environments/environment';

const BASEURL = environment.BASEURL + "/post";
const BASEURL2 = environment.BASEURL + "/comment";

@Injectable()
export class PostsService {
  private user:object;
  post: object;
  posts: object;
  options : {withCredentials:true };
  postsUpdate: EventEmitter<any> = new EventEmitter();

  constructor(private http: Http) { }

  private handleError(e) {
    console.log("POST ERROR");
    return Observable.throw(e.json().message);
  }

  private getPostUpdate():EventEmitter<any>{
    return this.postsUpdate;
  }

  listPosts(){
    return this.http.get(`${BASEURL}/list`, this.options)
      .map(res => res.json())
      .catch(this.handleError)
  }

  search(a){
    return this.http.get(`${BASEURL}/search/${a}`, this.options)
      .map(res => res.json())
      .catch(this.handleError)
  }

  listPostsById(a){
    return this.http.get(`${BASEURL}/listbyId/${a}`, this.options)
    .map(res => res.json())
    .map(posts => { this.postsUpdate.emit(posts); return posts})
    .catch(this.handleError);
  }

  private emitPostsUpdate(user){
    this.user = user;
    this.postsUpdate.emit(user);
    return user;
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

  makeComment(postId,content, userId){
    return this.http.post(`${BASEURL2}/makecomment`, {postId, content, userId}, this.options)
    .map(res => res.json())
    .catch(this.handleError);
  }

  deleteComment(id){
    return this.http.get(`${BASEURL2}/delete/${id}`, this.options)
    .map(res => res.json())
    .catch(this.handleError);
  }

  editPost(id, updates){
    return this.http.put(`${BASEURL}/edit/${id}`, updates, this.options)
    .map(res => res.json())
    .catch(this.handleError);
  }

  deletePost(id){
    return this.http.get(`${BASEURL}/delete/${id}`)
    .map(res => res.json())
    .catch(this.handleError);
  }

}
