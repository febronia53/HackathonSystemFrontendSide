import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './Authentication/login/login.component';
import { RegisterComponent } from './Authentication/register/register.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { HackathonDetailsComponent } from './Hackathon/hackathon-details/hackathon-details.component';
import { HackathonEditComponent } from './Hackathon/hackathon-edit/hackathon-edit.component';
import { HackathonCreateComponent } from './Hackathon/hackathon-create/hackathon-create.component';
import { ButtonModule } from 'primeng/button';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { CalendarModule } from 'primeng/calendar';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ChipsModule } from 'primeng/chips';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { RegisterInHackathonComponent } from './User/register-in-hackathon/register-in-hackathon.component'
import { CommonModule } from '@angular/common';
import { Authenticationinterceptor } from './Authentication/Interceptor.service';
import { TimelineModule } from 'primeng/timeline';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    HeaderComponent,
    HackathonDetailsComponent,
    HackathonEditComponent,
    HackathonCreateComponent,
    RegisterInHackathonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    ReactiveFormsModule,
    FormsModule,
    CarouselModule,
    TagModule,
    CalendarModule,
    NoopAnimationsModule,
    ChipsModule,
    HttpClientModule,
    CommonModule,
    TimelineModule,
    ProgressSpinnerModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Authenticationinterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
