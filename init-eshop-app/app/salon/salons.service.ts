import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {AppConfigService} from '../app-config.service';
import {Salon} from './Salon';
import {UserService} from '../user/user.service';

@Injectable()
export class SalonsService {
  public salons: Array<Salon>;
  public salonActif: Salon;
  constructor(private appConfig: AppConfigService, private http: Http, private service: UserService) {

  }
  public refresh() {
    this.http.get(this.appConfig.uri+"/canal")
    .subscribe(resp=>this.salons = resp.json());
  }

  public findById(salon: Salon) {
    this.http.get(this.appConfig.uri+"/canal/"+salon.id).subscribe(resp => this.salonActif=resp.json());
    this.remplir(salon);

  }

  public remplir(salon: Salon) {
    this.http.get(this.appConfig.uri +"/canal/"+salon.id+"/message").subscribe(resp => salon.messages = resp.json());

  }

  public save(salon: Salon) {

    salon.user=this.service.userActif;


    this.http.post(this.appConfig.uri+"/canal/"+salon.user.token, salon)
    .subscribe(resp => this.refresh());



  }

  public findAll() {
    if (this.salons==null) {
    this.http.get(this.appConfig.uri+"/canal")
    .subscribe(resp=>this.salons = resp.json());
  }
    else {
      return this.salons;
    }
    return new Array<Salon>();
  }

}
