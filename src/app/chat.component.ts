import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  template: `
    <div id="app" class="flex flex-column" style="height:600px;">
        <header class="title-bar flex flex-row flex-center">
          <div class="title-wrapper block center-element">
            <img class="logo" src="http://feathersjs.com/img/feathers-logo-wide.png"
              alt="Feathers Logo">
            <span class="title">Chat</span>
          </div>
        </header>
  
        <div class="flex flex-row flex-1 clear">
          <aside class="sidebar col col-3 flex flex-column flex-space-between">
            <header class="flex flex-row flex-center">
              <h4 class="font-300 text-center">
                <span class="font-600 online-count">0</span> users
              </h4>
            </header>
  
            <app-user-list></app-user-list>
            <footer class="flex flex-row flex-center">
              <a href="#" class="logout button button-primary">
                Sign Out
              </a>
            </footer>
          </aside>
  
          <div class="flex flex-column col col-9">
            <main class="chat flex flex-column flex-1 clear">
              <app-message-list></app-message-list>
            </main>
  
            <form class="flex flex-row flex-space-between" id="send-message">
              <input type="text" name="text" class="flex flex-1">
              <button class="button-primary" type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
  `
})
export class ChatComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
