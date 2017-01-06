import { Component, OnInit, Input } from '@angular/core';
import { MessageService } from './message.service'

@Component({
  selector: 'app-message-list',
  template: `
  <app-message 
    *ngFor="let message of messageService.messages" 
    [message]="message"
    class="message flex flex-row">
  </app-message>
  `
})
export class MessageListComponent implements OnInit {

  constructor(private messageService: MessageService) {}

  ngOnInit() {
  }

}
