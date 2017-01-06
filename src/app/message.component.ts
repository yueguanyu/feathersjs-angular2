import { Component, OnInit, Input, Inject } from '@angular/core';
import { MessageService } from './message.service'

@Component({
  selector: 'app-message',
  template: `
  <div class="message flex flex-row">
    <img src="{{ sender.avatar }}" alt="{{ sender.email }}" class="avatar">
    <div class="message-wrapper">
      <p class="message-header">
        <span class="username font-600">{{ sender.email }}</span>
        <span class="sent-date font-300">{{ message.createdAt | date }}</span>
      </p>
      <p class="message-content font-300">{{ message.text }}</p>
    </div>
  </div>
  `
})
export class MessageComponent implements OnInit {
  @Input() message;
  
  private sender;
  
  constructor(@Inject('dummyUser') private dummyUser) {
  }

  ngOnInit() {
        this.sender = typeof this.message.sentBy === 'object' ? this.message.sentBy : this.dummyUser;
  }

}
