import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { HttpHeaders } from '@angular/common/http';


@Injectable()
export class HttpService {
    

    constructor(private http: HttpClient) { }

    serverUrl = window.location.protocol + "//" + window.location.host;


    
    
    getDataInstagram() {

        
       //console.log(this.serverUrl);


        return this.http.get(`${this.serverUrl}/api/instagram/getDataInstagram`, {
            //headers: new HttpHeaders().set('ngrok-skip-browser-warning', 'true')
        });
    }
}