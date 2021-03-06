import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ToastModule, ToastOptions } from 'ng2-toastr/ng2-toastr';
import { ToastrCustomOptions } from './messages/toastrCustomOptions';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes/heroes.component';
import { HeroDetailComponent } from './heroes/hero-detail/hero-detail.component';
import { UserService } from './services/user/user.service';
import { HeroService } from './services/hero/hero.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './services/message/message.service';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { LoginComponent } from './login/login/login.component';
import { RegisterComponent } from './login/register/register.component';
import { GlobalsService } from './globals/globals.service';
import { AuthGuard } from './auth/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent,
    LoginComponent,
    RegisterComponent
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ToastModule.forRoot()
  ],

  providers: [
    AuthGuard,
    UserService,
    HeroService,
    MessageService,
    {provide: ToastOptions, useClass: ToastrCustomOptions },
    GlobalsService
  ],

  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
