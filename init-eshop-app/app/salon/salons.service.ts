import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {AppConfigService} from '../app-config.service';
import {Salon} from './Salon';

@Injectable()
export class SalonsService {
  public salons: Array<Salon>;
  constructor(private appConfig: AppConfigService, private http: Http) {

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
