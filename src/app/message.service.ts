import { Injectable } from '@angular/core';
import { RestService, SocketService } from './feathers.service';

@Injectable()
export class MessageService {
  private socket;
  private rest;
  debugString = "Hi, from Message Service!";

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
