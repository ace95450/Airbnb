import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { DomListComponent } from './dom-list/dom-list.component';
import { SingleDomComponent } from './dom-list/single-dom/single-dom.component';
import { DomFormComponent } from './dom-list/dom-form/dom-form.component';
import { HeaderComponent } from './header/header.component';
import { AuthGuardService } from './services/auth-guard.service';
import { DomService } from './services/dom.service';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'auth/signup', component: SignupComponent },
  { path: 'auth/signin', component: SigninComponent },
  { path: 'dom', canActivate: [AuthGuardService], component: DomListComponent },
  { path: 'dom/new', canActivate: [AuthGuardService], component: DomFormComponent },
  { path: 'dom/view/:id', canActivate: [AuthGuardService], component: SingleDomComponent },
  { path: '', redirectTo: 'dom', pathMatch: 'full' },
  { path: '**', redirectTo: 'dom' }
];

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    DomListComponent,
    SingleDomComponent,
    DomFormComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthGuardService,
    DomService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
