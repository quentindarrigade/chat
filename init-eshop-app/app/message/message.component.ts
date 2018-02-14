import { Component } from '@angular/core';
import { MessageService } from './message.service';
import { Message } from './message';


@Component({
    templateUrl: 'app/message/message.component.html'
})

export class MessageComponent {
    private formMessage: Message = new Message("OSS117");
    private filtre: string = "";
    constructor(private messageService: MessageService) { }

    public addMessage() {
        this.messageService.save(this.formMessage);
        //this.clientService.refresh();
        this.formMessage = new Message("", "");
    }


    public filtrer() {
        return this.messageService.findAll().filter(c =>
            c.nom.toLowerCase().indexOf(this.filtre.toLowerCase()) !== -1 ||
            c.prenom.toLowerCase().indexOf(this.filtre.toLowerCase()) !== -1
        );
    }


    public editer(message: Message) {
        this.formMessage = message;
    }

    public supprimer(message:Message) {
        this.messageService.delete(message);
    }
}
