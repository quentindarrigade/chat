import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule} from '@angular/http';
import {UserComponent} from './user.component';
import {UserService} from './user.service';


//Configuration des routes
const routes: Routes = [


{ path: 'auth', component: UserComponent }
// { path: 'client/:nom', component: ClientDetailComponent } ,

// { path: '**', component: PageNotFoundComponent }
];



@NgModule({
imports: [
  BrowserModule,
  FormsModule,
  RouterModule.forChild(routes),
  HttpModule
 ],
declarations: [
  UserComponent

],
providers: [
  UserService
],
exports: [

 ]
})

export class UserModule { }
