import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import {ChatComponent} from "./chat/chat.component";
import {ContactUsComponent} from "./contact-us/contact-us.component";
import {ErrorComponent} from "./error/error.component";

const routes: Routes = [
  {path:"sign-up",component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'messagerie',component:ChatComponent},
  {path:'contact-us',component:ContactUsComponent},
  {path:'**',component:ErrorComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
