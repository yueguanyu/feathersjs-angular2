import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { RestService, SocketService } from './feathers.service';
import { MessageService } from './message.service';
import { UserService } from './user.service';

import { AppComponent } from './app.component';
import { AuthenticationComponent } from './authenticate.component';
import { SignUpComponent } from './signup.component';
import { LoginComponent } from './login.component';
import { ChatComponent } from './chat.component';
import { PageNotFoundComponent } from './not-found.component';

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
    PageNotFoundComponent
  ],
  providers: [
    RestService,
    UserService,
    SocketService
   // MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
