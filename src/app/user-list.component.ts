import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  template: `
            <ul class="flex flex-column flex-1 list-unstyled user-list">
              <li *ngFor="let user of users">
                {{user}}
              </li>
            </ul>
  `
})
export class UserListComponent implements OnInit {
  public users = ["Bob","Luke","Harry"];
  
  constructor() { }

  ngOnInit() {
  }

}
