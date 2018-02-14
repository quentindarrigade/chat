import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule} from '@angular/http';

import { AppConfigService } from './app-config.service';

import { MomentService } from './moment.service';

import {SalonModule} from './salon/salon.module';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(routes),
        HttpModule,
        SalonModule
    ],

    declarations: [
        AppComponent
    ],

    providers: [
        AppConfigService,
        MomentService
    ],

    bootstrap: [ AppComponent ]
})

export class AppModule { }
