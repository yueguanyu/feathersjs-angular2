import { Component } from '@angular/core';
import { RestService, SocketService } from './feathers.service';
import { MessageService } from './message.service'

@Component({
  selector: 'app-root',
  template: `
  <h2>{{title}}</h2>
  
  <h2>Feedback</h2>
  <ul>
    <li>Rest service: {{rest.debugString}}</li>
    <li>Socket service: {{socket.debugString}}</li>
    <li>Message service: {{_messageService.debugString}}</li>
  </ul>
  
  <nav>
    <a routerLink="/authenticate" routerLinkActive="active">Authentication</a>
    <a routerLink="/signup" routerLinkActive="active">Sign up</a>
    <a routerLink="/login" routerLinkActive="active">Login</a>
    <a routerLink="/chat" routerLinkActive="active">Chat</a>
  </nav>
    
  <h2>Router outlet</h2>
  <router-outlet></router-outlet> <!-- Routed views go here -->
  
  <!--<div class="message" *ngFor="let message of _messages">-->
  <!-- <h1 class="title">{{_messages.name}}</h1> -->
  <!--</div>-->
  `
})

export class AppComponent {
//  private _messages: any[] = [];
  private _messages: any = {};
  title = 'app works!';
  
  constructor(private rest:RestService, private socket:SocketService, private _messageService: MessageService) {}
  
  // Called once when the component is early in its creation
  ngOnInit() {
    // this._messageService.find({}).then(messages => {
    //   this._messages = messages;
    //   console.log(messages);
    // });
  }
  
}
