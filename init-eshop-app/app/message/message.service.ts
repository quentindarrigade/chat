import { Injectable } from '@angular/core';
import { Message } from './message';
import {Http} from '@angular/http';
import {AppConfigService}  from '../app-config.service';

@Injectable()
export class MessageService {
    private listeMessages: Array<Message>;
    private message: Message =new Message();

    constructor(private appConfig: AppConfigService, private http: Http) {

    }

    // public refresh() {
    //     this.http
    //     .get(this.appConfig.uri + "/client")
    //     .subscribe(resp => this.clients = resp.json());
    // }

    public findAllMessage(date: string) {
    //public date: "14022018111109";
      if (this.listeMessages == null) {
      this.http
      .get(this.appConfig.uri + "/canal/message/" + date)
      .subscribe(resp => this.listeMessages = resp.json());
        //return this.clients;
      this.listeMessages = new Array<Message>();
    }
    return this.listeMessages;
  }


  //   public findAllMessageDate(date: Date) {
  //   //public date: "14022018111109";
  //     if (this.listeMessages == null) {
  //     this.http
  //     .get(this.appConfig.uri + "/canal/" + date)
  //     .subscribe(resp => this.listeMessages = resp.json());
  //       //return this.clients;
  //     return new Array<Message>();
  //   }
  //   else {
  //       return this.listeMessages;
  //   }
  // }


//     public findAll() {
//       if (this.listeMessages == null) {
//       this.http
//       .get(this.appConfig.uri + "/canal/1")
//       .subscribe(resp => this.listeMessages = resp.json());
//         //return this.clients;
//       return new Array<Message>();
//     }
//     else {
//         return this.listeMessages;
//     }
//   }
//
//
//     public findById(id: number) {
//       this.http
//       .post(this.appConfig.uri + "/message", id)
//       .subscribe(resp => this.listeMessages = resp.json());
//
//         // for (let client of this.clients) {
//         //     if (client.id == id) {
//         //         return client;
//         //     }
//         // }
//         // return null;
//     }
//
//
//     public save(message: Message) {
// this.http
// .post(this.appConfig.uri + "/message/", message)
// .subscribe(resp => this.refresh());
//
//     }
//
//     public delete(message: Message) {
//       this.http
//       .delete(this.appConfig.uri + "/message/" + message.id)
//       .subscribe(resp => this.refresh());
//
//     }
}
