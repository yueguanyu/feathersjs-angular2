import { Injectable } from '@angular/core';
import { FeathersService } from './feathers.service';

@Injectable()
export class MessageService {
  public messages;
  private service; // The Feathers 'messages' service
  // A placeholder image if the user does not have one
  private PLACEHOLDER = 'https://placeimg.com/60/60/people';
  // An anonymous user if the message does not have that information
  private dummyUser = {
    avatar: this.PLACEHOLDER,
    email: 'Anonymous'
  }

  constructor(private feathersService: FeathersService) {
    this.service = feathersService.app.service('messages');
    // Find all messages
    this.service.find().then((page) => {
      this.messages = page.data;
      console.log('Messages: ', this.messages);
    })
    // On errors report to the console
      .catch(error => {
        console.log('Error: ', error);
      })

    // We will also see when new messages get created in real-time
    this.service.on('created', message => {
      this.messages.push(message);
    })
  }
  
}
