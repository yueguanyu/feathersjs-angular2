import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { RestService, SocketService, FeathersService } from './feathers.service';
import { MessageService } from './message.service';
import { AuthService } from './auth.service';
import { UserService } from './user.service';

import { AppComponent } from './app.component';
import { AuthenticationComponent } from './authenticate.component';
import { SignUpComponent } from './signup.component';
import { LoginComponent } from './login.component';
import { ChatComponent } from './chat.component';
import { PageNotFoundComponent } from './not-found.component';
import { UserListComponent } from './user-list.component';
import { MessageListComponent } from './message-list.component';
import { MessageComponent } from './message.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    AuthenticationComponent,
    SignUpComponent,
    LoginComponent,
    ChatComponent,
    PageNotFoundComponent,
    UserListComponent,
    MessageListComponent,
    MessageComponent
  ],
  providers: [
    RestService,
    AuthService,
    SocketService,
    FeathersService,
    UserService,
    MessageService,
    {provide: 'dummyUser', useValue: {avatar: 'https://placeimg.com/60/60/people', email: 'Anonymous'}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
