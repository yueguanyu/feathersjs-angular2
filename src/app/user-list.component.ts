import { Component, OnInit, Input } from '@angular/core';
import { UserService } from './user.service'

@Component({
  selector: 'app-user-list',
  template: `
            <ul class="flex flex-column flex-1 list-unstyled user-list">
              <li *ngFor="let user of userService.users">
                {{user.email}}
              </li>
            </ul>
  `
})
export class UserListComponent implements OnInit {

  constructor(private userService: UserService) {}

  ngOnInit() {
  }

}
