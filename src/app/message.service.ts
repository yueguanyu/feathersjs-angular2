import { Injectable } from '@angular/core';
import { RestService, SocketService } from './feathers.service';

@Injectable()
export class MessageService {
//  private _socket;
  private _rest;
  debugString = "Hi, from Message Service!";

  constructor(
//    private _socketService: SocketService,
    private _restService: RestService
  ) {
    // Let's get both the socket.io and REST feathers services for messages!
    //this._rest = _restService._app.service('messages');
//    this._socket = _socketService._app.service('lessons/0G1cMv0AaggQzVqL');
  }
  
  find(query: any) {
    return this._rest.find(query);
  }

  get(id: string, query: any) {
    return this._rest.get(id, query);
  }

  create(message: any) {
    return this._rest.create(message);
  }

//  remove(id: string, query: any) {
//    return this._socket.remove(id, query);
//  }
}
