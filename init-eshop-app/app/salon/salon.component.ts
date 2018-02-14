import {Component, HostListener, Input} from '@angular/core';
import { Salon} from './Salon';
import {SalonsService} from './salons.service';




@Component({


  templateUrl: 'app/salon/salon.component.html'
})
export class SalonComponent{
  private filtre : string ="";
  private isVisible: boolean =false;
  private salonDefaut: Salon =new Salon();


  constructor (private service: SalonsService){

  }

  public filtrer() {
    return this.service.findAll().filter(s => s.nom.toLowerCase().indexOf(this.filtre.toLowerCase()) !== -1 );

  }

  public ajouter2() {

    this.isVisible=true;

  }
  public annuler() {
    this.salonDefaut= new Salon();
    this.isVisible=false;

  }

   }
