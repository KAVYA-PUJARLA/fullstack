import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { LoginComponent } from './login/login.component';
import {RegistryService} from './registry.service';
import { ButtonPageComponent } from './button-page/button-page.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { PracticeComponent } from './practice/practice.component'

const appRoutes:Routes =[
  {path:'',component: FirstPageComponent},
  {path:'signin',component: SigninComponent},
  {path:'login',component: LoginComponent},
  {path:'buttonpage',component:ButtonPageComponent},
  {path:'practice',component:PracticeComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    LoginComponent,
    ButtonPageComponent,
    FirstPageComponent,
    PracticeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [RegistryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
