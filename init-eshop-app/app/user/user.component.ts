import {Component, HostListener, Input} from '@angular/core';
import { User} from './User';
import {UserService} from './user.service';




@Component({


  templateUrl: 'app/user/user.component.html'
})
export class UserComponent{
  private filtre : string ="";
  private isVisible: boolean =false;
  private userDefaut: User =new User();


  constructor (private service: UserService){

  }




  public ajouter() {

    var nom = this.userDefaut.username;

    var user: User=new User(nom);


    this.service.save(user);
    // for (let client of this.service.findAll()) {
    //   console.log(client.getNom());
    // }
    // this.myList.push(client8);
    this.userDefaut=new User();
    this.isVisible=false;
  }

   }
