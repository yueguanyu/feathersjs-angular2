import { Injectable } from '@angular/core';
import { RestService, SocketService } from './feathers.service';

@Injectable()
export class UserService {

  constructor(private rest:RestService, private socket:SocketService) {
    this.rest.app.authenticate().then( () => {
    }, () => {
    })
  }

  login(email, password) {
    this.rest.app.authenticate({
      strategy: 'jwt', 
      endpoint: '/auth/local',
      'email': email,
      'password': password
    }).then(function(result){
      console.log('Authenticated!', result);
    }).catch(function(error){
      console.error('Error authenticating!', error);
    });
  }
  
  logout() {
  }

  isLoggedIn() {
  }
}
