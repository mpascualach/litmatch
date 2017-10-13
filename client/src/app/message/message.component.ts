import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service'
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { MessageService } from '../services/message.service'

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
  providers: [ AuthService, MessageService ]
})
export class MessageComponent implements OnInit {
  user: any;
  post: any;
  messages: Array<object>;
  constructor(private auth: AuthService, private message: MessageService) { }

  ngOnInit() {
    this.auth.getUser();
    this.auth.getLoginEventEmitter()
      .subscribe(user => {
        this.user = user
        this.message.listMessages(user._id)
        .subscribe(messages => {this.messages=messages; console.log(this.messages)
      });
    })
  }

}
