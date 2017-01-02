import { Injectable } from '@angular/core';
import { FeathersService } from './feathers.service';
import { User } from './user.model';

@Injectable()
export class UserService {
  public users: Array<User>;
  private service; // The Feathers 'users' service

  constructor(private feathersService: FeathersService) {
    this.service = feathersService.app.service('users');
    // Find all users
    // this.service.find({}).then(() => {
    //   this.users = page.data
    // })

    // We will also see when new users get created in real-time
    // userService.on('created', user => {
    //   this.users.push(user)
    // })
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
