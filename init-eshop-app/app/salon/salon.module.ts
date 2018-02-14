import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule} from '@angular/http';
import {SalonComponent} from './salon.component';


//Configuration des routes
const routes: Routes = [


// { path: 'canal', component: SalonsComponent },
// { path: 'client/:nom', component: ClientDetailComponent } ,

// { path: '**', component: PageNotFoundComponent }
];
];


@NgModule({
imports: [
  BrowserModule,
  FormsModule,
  RouterModule.forChild(routes),
  HttpModule
 ],
providers: [

 ],
declarations: [
  SalonComponent

],
exports: [

 ]
})

export class SalonModule { }
