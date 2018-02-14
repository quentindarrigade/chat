export class Salon {
  public nom: string;
  public id: number=0;
  public proprietaire: User;
  public messages: Array<Message>;
  public isVisible: boolean=false;

  constructor( nom?:string){
    this.nom=nom;
  }


}
