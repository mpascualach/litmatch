import { Injectable, EventEmitter } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http} from '@angular/http';
import 'rxjs';
import {environment} from '../../environments/environment';

const BASEURL = environment.BASEURL + "/auth";

@Injectable()
export class AuthService {

  user:object;
  userLoginEvent:EventEmitter<any> = new EventEmitter<any>();
  options = {withCredentials:true};

  constructor(private http: Http) {
    this.isLoggedIn().subscribe();
  }

  isLoggedIn() {
    return this.http.get(`${BASEURL}/loggedin`, this.options)
      .map(res => res.json())
      .map(user => this.emitUserLoginEvent(user))
      .catch(this.handleError);
  }

    public getLoginEventEmitter():EventEmitter<any>{
      return this.userLoginEvent;
    }

    public getUser(){
      return this.user;
    }

    private emitUserLoginEvent(user){
      this.user = user;
      this.userLoginEvent.emit(user);
      return user;
    }

    private handleError(e) {
      return Observable.throw(e.json().message);
    }

    seeUser(id){
      return this.http.get(`${BASEURL}/${id}`, this.options)
        .map(res => res.json())
        .catch(this.handleError);
    }

    signup(user) {
      return this.http.post(`${BASEURL}/signup`, user, this.options)
        .map(res => res.json())
        .map(user => this.emitUserLoginEvent(user))
        .catch(this.handleError);
    }

    login(user) {
      return this.http.post(`${BASEURL}/login`, user, this.options)
        .map(res => res.json())
        .map(user => {this.emitUserLoginEvent(user);})
        .catch(this.handleError);
    }

    logout() {
      return this.http.get(`${BASEURL}/logout`, this.options)
        .map(res => res.json())
        .map(user => this.emitUserLoginEvent(null))
        .catch(this.handleError);
    }

    editUser(id, user){
      console.log(id,user)
      return this.http.put(`${BASEURL}/${id}/edit`, user, this.options)
        .map(res => res.json())
        .map(user => this.emitUserLoginEvent(user))
        .catch(this.handleError);
    }
}
