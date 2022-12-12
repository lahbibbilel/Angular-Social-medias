import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './auth/login/login.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ChatComponent } from './chat/chat.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ToastrModule } from 'ngx-toastr';
import { ErrorComponent } from './error/error.component';
import { PageAccueilComponent } from './page-accueil/page-accueil.component';
import { MatDialogModule } from '@angular/material/dialog';
import { PopUpComponent } from './pop-up/pop-up.component';




@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    ChatComponent,
    HeaderComponent,
    FooterComponent,
    ContactUsComponent,
    ErrorComponent,
    PageAccueilComponent,
    PopUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    MatDialogModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
