import { Routes } from '@angular/router';

import { UserprofileComponent } from './userprofile/userprofile.component';
import { SeepostComponent } from './seepost/seepost.component';
import { MakecommentComponent } from './makecomment/makecomment.component';
import { MakepostComponent } from './makepost/makepost.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { EditpostComponent } from './editpost/editpost.component';
import  { SeeuserComponent } from './seeuser/seeuser.component';
import  { LoginformComponent } from './loginform/loginform.component';
import  { SignupformComponent } from './signupform/signupform.component';
import { AllpostsComponent } from './allposts/allposts.component';
import { MessageComponent } from './message/message.component';
import { ShelfComponent } from './shelf/shelf.component';
import { SearchesComponent } from './searches/searches.component';

import  { IsLoggedInService } from './services/isLoggedIn.canactivate.service';

export const routes: Routes = [
  { path: '', component: AllpostsComponent },
  { path: 'search/:id', component: SearchesComponent },
  { path: 'post/:id', component: SeepostComponent,
    children: [
      { path: 'comment', component: MakecommentComponent },
    ]
 },
  { path: 'editpost/:id', component: EditpostComponent },
  { path: 'makepost', component: MakepostComponent },
  { path: 'user/:id', component: SeeuserComponent,
    children: [
      { path: 'edit', component: EditprofileComponent},
    ]
  },
  { path: 'shelf/:id', component: ShelfComponent},
  { path: 'messages/:id', component: MessageComponent},
  { path: 'login', component: LoginformComponent, },
  { path: 'signup', component: SignupformComponent, },
  { path: '**', redirectTo: '' }
];
