import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule} from '@angular/http';
import {MessageComponent} from './message.component';
import {MessageService} from './message.service';

//Configuration des routes
const routes: Routes = [
{ path: 'message', component: MessageComponent }
];


@NgModule({
imports: [
  BrowserModule,
  FormsModule,
  RouterModule.forChild(routes),
  HttpModule
 ],
providers: [
MessageService
 ],
declarations: [
MessageComponent
],
exports: [

 ]
})

export class MessageModule { }
