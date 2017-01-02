import { Component } from '@angular/core';
import { RestService, SocketService } from './feathers.service';
import { MessageService } from './message.service'

@Component({
  selector: 'app-root',
  template: `
  <router-outlet></router-outlet> <!-- Routed views go here -->
  

  
  <nav>
    <a routerLink="/authenticate" routerLinkActive="active">Authentication</a>
    <a routerLink="/signup" routerLinkActive="active">Sign up</a>
    <a routerLink="/login" routerLinkActive="active">Login</a>
    <a routerLink="/chat" routerLinkActive="active">Chat</a>
  </nav>
  

  <!-- <ul>
    <li>Rest service: {{rest.debugString}}</li>
    <li>Socket service: {{socket.debugString}}</li>
    <li>Message service: {{messageService.debugString}}</li>
  </ul>-->
  
  `
})

export class AppComponent {
//  private messages: any[] = [];
  private messages: any = {};
  title = 'app works!';
  
  constructor(
    // private rest:RestService, 
    // private socket:SocketService, 
    // private messageService: MessageService
    ) {}
  
  // Called once when the component is early in its creation
  ngOnInit() {
    //
    // this.messageService.find({}).then(messages => {
    //   this.messages = messages;
    //   console.log(messages);
    // });
  }
  
}
