import { Routes } from '@angular/router';

import { UserprofileComponent } from './userprofile/userprofile.component';
import { SeepostComponent } from './seepost/seepost.component';
import { MakecommentComponent } from './makecomment/makecomment.component';
import { MakepostComponent } from './makepost/makepost.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { EditpostComponent } from './editpost/editpost.component';
import  { LoginformComponent } from './loginform/loginform.component';
import  { SignupformComponent } from './signupform/signupform.component';
import { AllpostsComponent } from './allposts/allposts.component';

import  { IsLoggedInService } from './services/isLoggedIn.canactivate.service';

export const routes: Routes = [
  { path: '', component: AllpostsComponent },
  { path: 'post/:id', component: SeepostComponent,
    children: [
      { path: 'comment', component: MakecommentComponent },
    ]
 },
  { path: 'editpost/:id', component: EditpostComponent },
  { path: 'makepost', component: MakepostComponent },
  { path: 'user', component: UserprofileComponent,
    children: [
      { path: ':id/edit', component: EditprofileComponent}
    ]
  },
  { path: 'login', component: LoginformComponent, },
  { path: 'signup', component: SignupformComponent, },
  { path: '**', redirectTo: '' }
];
