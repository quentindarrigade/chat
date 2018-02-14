export class Salon {
  public nom: string;
  public id: number=0;
  public proprietaire: string;
  public messages: Array<string>;
  public isVisible: boolean=false;

  constructor( nom?:string){
    this.nom=nom;
  }


}
