import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HttpClientModule } from '@angular/common/http';
import { WelcomeServiceService } from './welcome-service.service';
import { UrlService } from './url.service';
import { ProfileService } from './profile.service';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login.service';
@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [WelcomeServiceService, UrlService, ProfileService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
