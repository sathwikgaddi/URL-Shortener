import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })

export class URLService {

    constructor(private http: HttpClient) {}
    route_link = 'http://localhost:3000'


    onLinkSent(link1: string) {
        console.log('==='+link1)
        
        const linkData =  {link: link1};
        console.log(linkData)
        return this.http.post<{ message: string, hash:string}>(this.route_link+'/create', linkData)
        
        
    }

    onCustomLinkSent(link1: string, customlink: string) {

        const linkData =  {link: link1, customString: customlink};
        console.log(linkData)
        return this.http.post<{ message: string, hash:string}>(this.route_link+'/create', linkData)

    }


}