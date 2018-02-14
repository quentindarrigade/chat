export class User {
  public username: string;
  public token: string="";
  public id: number;


  constructor( nom?:string){
    this.username=nom;
  }


}
