import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule} from '@angular/http';


//Configuration des routes
const routes: Routes = [
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

],
exports: [

 ]
})

export class SalonModule { }
