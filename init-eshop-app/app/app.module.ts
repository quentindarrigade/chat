import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule} from '@angular/http';

import { AppConfigService } from './app-config.service';

import { MomentService } from './moment.service';

import {SalonModule} from './salon/salon.module';
import {MessageModule} from './message/message.module';
import {HomeComponent} from './home.component';

//Configuration des routes
const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(routes),
        HttpModule,
        SalonModule,
        MessageModule
    ],

    declarations: [
        AppComponent,
        HomeComponent
    ],

    providers: [
        AppConfigService,
        MomentService
    ],

    bootstrap: [ AppComponent ]
})

export class AppModule { }
