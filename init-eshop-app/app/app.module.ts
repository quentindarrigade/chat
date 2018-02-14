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
import {NavigationComponent} from  './navigation.component';
import {UserModule} from './user/user.module';
import {UserService} from './user/user.service';
import {SalonsService} from './salon/salons.service';

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
        MessageModule,
        UserModule
    ],

    declarations: [
        AppComponent,
        HomeComponent,
        NavigationComponent
    ],

    providers: [
        AppConfigService,
        MomentService,
        UserService,
        SalonsService
    ],

    bootstrap: [ AppComponent ]
})

export class AppModule { }
