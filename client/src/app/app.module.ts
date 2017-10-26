import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import 'materialize-css';
import { MaterializeModule } from 'angular2-materialize';
import { AppComponent } from './app.component';
import { LoginformComponent } from './loginform/loginform.component';
import { AuthService } from './services/auth.service';
import { PostsService } from './services/posts.service';
import { BooksService } from './services/books.service'
import { UserprofileComponent } from './userprofile/userprofile.component';
import { RouterModule } from '@angular/router';
import { IsLoggedInService } from './services/isLoggedIn.canactivate.service';
import {routes} from './routes';
import { SignupformComponent } from './signupform/signupform.component';
import { AllpostsComponent } from './allposts/allposts.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { MakecommentComponent } from './makecomment/makecomment.component';
import { MakepostComponent } from './makepost/makepost.component';
import { SeepostComponent } from './seepost/seepost.component';
import { EditpostComponent } from './editpost/editpost.component';
import  { SeeuserComponent } from './seeuser/seeuser.component';
import { MessageComponent } from './message/message.component';
import { ShelfComponent } from './shelf/shelf.component';
import { SearchesComponent } from './searches/searches.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginformComponent,
    UserprofileComponent,
    SignupformComponent,
    AllpostsComponent,
    EditprofileComponent,
    MakecommentComponent,
    MakepostComponent,
    SeepostComponent,
    SeeuserComponent,
    EditpostComponent,
    MessageComponent,
    ShelfComponent,
    SearchesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthService, IsLoggedInService, PostsService, BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
