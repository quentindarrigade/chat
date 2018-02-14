import { Component } from '@angular/core';
import { MessageService } from './message.service';
import { Message } from './message';


@Component({
    templateUrl: 'app/message/message.component.html'
})

export class MessageComponent {
    private message: Message = new Message();
    private listeClients: Array<Message> = new Array<Message>();

    private filtre: string = "";
    constructor(private messageService: MessageService) { }

    public listerMessageAll() {
        return this.messageService.findAllMessage("13022018111008")
       }

    // public listerMessageDate() {
    //     return this.messageService.findAllMessageDate("14022018111008")
    //    }

       // public addMessage() {
       //     this.messageService.save(this.formMessage);
       //     //this.clientService.refresh();
       //     this.formMessage = new Message("", "");
       // }

// public filtrer() {
//     return this.messageService.findAll().filter(c =>
//        c.nom.toLowerCase().indexOf(this.filtre.toLowerCase()) !== -1 ||
//        c.prenom.toLowerCase().indexOf(this.filtre.toLowerCase()) !== -1
//     );
//    }
    //
    //
    // public editer(message: Message) {
    //     this.formMessage = message;
    // }
    //
    // public supprimer(message:Message) {
    //     this.messageService.delete(message);
    // }
}
