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
    UserListComponent
  ],
  providers: [
    RestService,
    AuthService,
    SocketService,
    FeathersService,
    UserService
   // MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
