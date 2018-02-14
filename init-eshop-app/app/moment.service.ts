import { Injectable } from '@angular/core';
import { Http } from '@angular/http';



@Injectable()
export class MomentService {
    public format(date: Date) {
        let day: string = ("0" + date.getDate()).slice(-2);
        let month: string = ("0" + (date.getMonth() + 1)).slice(-2);
        let year: string = "" + date.getFullYear();
        let hour: string = ("0" + date.getHours()).slice(-2);
        let minutes: string = ("0" + date.getMinutes()).slice(-2);
        let seconds: string = ("0" + date.getSeconds()).slice(-2);

        return day + month + year + hour + minutes + seconds;
    }
}
