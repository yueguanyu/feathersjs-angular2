import { Component, OnInit, Input, Inject } from '@angular/core';
import { UserService } from './user.service'

@Component({
  selector: 'app-user-list',
  template: `
    <ul class="flex flex-column flex-1 list-unstyled user-list">
      <li *ngFor="let user of userService.users">
        <a className="block relative" href="#">
          <img src="{{user.avatar || dummyUser.avatar}}" className="avatar" />
          <span className="absolute username">{{user.email}}</span>
        </a>
      </li>
    </ul>
  `
})
export class UserListComponent implements OnInit {

  constructor(private userService: UserService, @Inject('dummyUser') private dummyUser) {}

  ngOnInit() {
  }

}
