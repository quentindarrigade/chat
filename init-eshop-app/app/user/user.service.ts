import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {AppConfigService} from '../app-config.service';
import {User} from './User';
import {UserComponent} from './user.component';

@Injectable()
export class UserService {
  public userActif: User=new User();
  constructor(private appConfig: AppConfigService, private http: Http) {

  }
  // public refresh() {
  //   this.http.get(this.appConfig.uri+"/auth")
  //   .subscribe(resp=>this.user.token = resp.json());
  // }

  public save(user: User) {




    this.http.post(this.appConfig.uri+"/auth", user)
    .subscribe(resp => this.userActif.token=resp.json().token);
    this.userActif.username=user.username;



  }



}
