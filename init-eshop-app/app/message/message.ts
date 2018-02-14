export class Message {
    public contenu: string;
    public autheur: string;
    public id: number;
    public date: string;

    constructor(contenu?: string) {
      this.contenu=contenu;
     }

    // public getNom(): string {
    //     return this.prenom + " " + this.nom;
    // }
}
