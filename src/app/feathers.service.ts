import { Injectable } from '@angular/core';
const superagent = require('superagent');
const feathers = require('feathers/client');
const socketio = require('feathers-socketio/client');
const io = require('socket.io-client');
const localstorage = require('feathers-localstorage');
const hooks = require('feathers-hooks');
const rest = require('feathers-rest/client');
// const authentication = require('feathers-authentication/client');
const authentication = require('feathers-authentication-client');


// Your base server URL here
const HOST = 'http://feathersjs-aurerua.c9users.io'

@Injectable()
export class RestService {
  public _app: any;
  debugString="Rest is ok for now!";
  
  constructor() {
    this._app = feathers() // Initialize feathers
      .configure(rest(HOST).superagent(superagent)) // Fire up rest
      .configure(hooks()); // Configure feathers-hooks
  }
}

@Injectable()
export class SocketService {
  public socket: any;
  public _app: any;
  debugString="Socket is ok for now!";

  constructor() {
    this.socket = io(HOST);
    this._app = feathers()
      .configure(socketio(this.socket))
      .configure(hooks())
  }
}