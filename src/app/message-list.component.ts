import { Component, OnInit, Input } from '@angular/core';
import { MessageService } from './message.service'

@Component({
  selector: 'app-message-list',
  template: `
  <div *ngFor="let message of messageService.messages"class="message flex flex-row">
<!--    <img src="{{avatar sentBy.avatar}}" alt="{{sentBy.email}}" class="avatar"> -->
    <div class="message-wrapper">
      <p class="message-header">
<!--        <span class="username font-600">{{username sentBy.email}}</span> -->
        <span class="sent-date font-300">{{message.createdAt}}</span>
      </p>
      <p class="message-content font-300">{{message.text}}</p>
    </div>
  </div>
  `
})
export class MessageListComponent implements OnInit {

  constructor(private messageService: MessageService) {}

  ngOnInit() {
  }

}
