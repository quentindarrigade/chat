import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule} from '@angular/http';
import {SalonComponent} from './salon.component';
import {SalonsService} from './salons.service';


//Configuration des routes
const routes: Routes = [


{ path: 'canal', component: SalonComponent }
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
providers: [

 ],
declarations: [
  SalonComponent

],
providers: [
  SalonsService
]
exports: [

 ]
})

export class SalonModule { }
