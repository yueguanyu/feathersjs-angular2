import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { AuthenticationComponent }   from './authenticate.component';
import { SignUpComponent }   from './signup.component';
import { LoginComponent }     from './login.component';
import { ChatComponent }     from './chat.component';
import { PageNotFoundComponent } from './not-found.component';

const appRoutes: Routes = [
  { path: 'authenticate', component: AuthenticationComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'chat',
    component: ChatComponent,
    data: { title: 'FeatherJs Chat' }
  },
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}