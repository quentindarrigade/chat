import { Injectable } from '@angular/core';

@Injectable()
export class AppConfigService {
    public uri: string = "http://192.168.1.37:8080/chat/api";
}
