import { Injectable } from '@angular/core';
import { RestService, SocketService } from './feathers.service';

@Injectable()
export class MessageService {
  private socket;
  private rest;
  
  // A placeholder image if the user does not have one
  private PLACEHOLDER = 'https://placeimg.com/60/60/people';
  // An anonymous user if the message does not have that information
  const dummyUser = {
    avatar: PLACEHOLDER,
    email: 'Anonymous'
  }

  constructor(
    private socketService: SocketService,
    private restService: RestService
  ) {
    // Let's get both the socket.io and REST feathers services for messages!
    this.rest = restService.app.service('messages');
    this.socket = socketService.app.service('messages');
  }
  
  find(query: any) {
    return this.rest.find(query);
  }

  get(id: string, query: any) {
    return this.rest.get(id, query);
  }

  create(message: any) {
    return this.rest.create(message);
  }

  remove(id: string, query: any) {
    return this.socket.remove(id, query);
  }
}
