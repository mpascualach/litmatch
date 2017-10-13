import { Injectable, EventEmitter } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http} from '@angular/http';
import 'rxjs';
import {environment} from '../../environments/environment';

const BASEURL = environment.BASEURL + "/messages";

@Injectable()
export class MessageService {
  private user:object;
  messages: object;
  messageListener:EventEmitter<any> = new EventEmitter<any>();
  options = {withCredentials:true};
  constructor(private http: Http) { }

  private handleError(e) {
    console.log("MESSAGING ERROR");
    return Observable.throw(e.json().message);
  }

  public messageUpdate():EventEmitter<any>{
    return this.messageListener;
  }

  private emitUserLoginEvent(messages){
    this.messages = messages;
    this.messageListener.emit(messages);
    return messages;
  }

  listMessages(a){
    return this.http.get(`${BASEURL}/listbyId/${a}`)
    .map(res => res.json())
    .catch(this.handleError);
  }



}
