export class Salon {
  public nom: string;
  public id: number=0;
  public proprietaire: string;
  public messages: Array<string>;
  public isVisible: boolean=false;

  constructor( nom?:string,  prenom?:string){
    this.nom=nom;
    this.prenom=prenom;
  }


}
