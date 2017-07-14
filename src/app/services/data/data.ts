import 'rxjs/add/operator/toPromise'
import { Injectable, Sanitizer, SecurityContext,Pipe } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import {DomSanitizer, SafeUrl, SafeResourceUrl} from "@angular/platform-browser";

import { User } from '../../model/user';

import { AppSettings } from '../../app.settings';


@Injectable()
export class Data {

  constructor(private http: Http) {

  }

  getUsers(): Promise<User[]> {

    var url = AppSettings.HOST_NAME + '/api/users';
    var headers = new Headers({ 'Access-Control-Allow-Origin': '*' });
    var options = new RequestOptions({ headers: headers });

    return this.http.get(url, options)
      .toPromise()
      .then(
      response => response.json()
      )
  }

  submitInnovation(data: any): Promise<any> {
    var body = JSON.stringify(data);
    var headers = new Headers({ 'Content-Type': 'application/json; charset=utf-8', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type' });
    var options = new RequestOptions({ headers: headers });
    var url = AppSettings.HOST_NAME + '/api/innovation';

    return this.http.post(url, body, options)
      .toPromise()
      .then(
      response => response.json()
      )
  }
}


@Injectable()
export class Settings {
  
  SIDEBAR_COLOR: string;
  SIDEBAR_IMAGE:string;

  constructor( private _sanitizer: Sanitizer,private domSanitizer: DomSanitizer){
    this.SIDEBAR_COLOR = "orange";
    this.SIDEBAR_IMAGE = '/assets/img/sidebar-5.jpg';
  }
}

@Pipe({name: 'safeStyle'})
export class Safe {
  constructor(private domSanitizer:DomSanitizer){}

  transform(style) {
    return this.domSanitizer.bypassSecurityTrustStyle(style);
    // return this.sanitizer.bypassSecurityTrustHtml(style);
    // return this.sanitizer.bypassSecurityTrustScript(value);
    // return this.sanitizer.bypassSecurityTrustUrl(value);
    // return this.sanitizer.bypassSecurityTrustResourceUrl(value);
  }
}