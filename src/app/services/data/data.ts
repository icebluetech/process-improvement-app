import 'rxjs/add/operator/toPromise'
import { Injectable, Sanitizer, SecurityContext, Pipe } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http, Headers, RequestOptions } from '@angular/http';

import { DomSanitizer, SafeUrl, SafeResourceUrl } from "@angular/platform-browser";

import { User } from '../../model/user';
import { Doc } from '../../model/doc';
import { Innovation } from '../../model/innovation';
import { Brainstorm } from '../../model/brainstorm';
import { Experiment } from '../../model/experiment';
import { InnovationCategory } from '../../model/innovationCategory';
import { StandardWork } from '../../model/standardWork';
import { RootCause } from '../../model/rootCause';
import { Result } from '../../model/result';
import { Training } from '../../model/training';

import { AppSettings } from '../../app.settings';

import { Observable, Observer } from 'rxjs/Rx';


@Injectable()
export class Data {

  constructor(private http: Http, private route: ActivatedRoute) {

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
      response => response.text() ? response.json() : {}
      )
  }

  private extractData(res: Response) {
    return res.text() ? res.json() : {};;
  }

  makeFileRequest(url: string, params: string[], files: any[]): Observable<any> {
    return Observable.create((observer: Observer<any>) => {
      let formData: FormData = new FormData(),
        xhr: XMLHttpRequest = new XMLHttpRequest();

      var test = window.location.pathname.split('/').length - 1;
      var id = window.location.pathname.split('/')[test];

      for (let i = 0; i < files.length; i++) {
        formData.append(id, files[i], files[i].Title);
      }

      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            observer.next("test");
            observer.complete();
          } else {
            observer.error(xhr.response);
          }
        }
      };

      xhr.open('POST', url, true);
      xhr.send(formData);
    });
  }

  getItems(): Promise<InnovationCategory[]> {

    var url = AppSettings.HOST_NAME + "/api/InnovationCategory";
    var headers = new Headers({ 'Access-Control-Allow-Origin': '*' });
    var options = new RequestOptions({ headers: headers });

    return this.http.get(url, options)
      .toPromise()
      .then(
      response => response.json()
      )
  }

  getInnovations(): Promise<Innovation[]> {

    var url = AppSettings.HOST_NAME + "/api/Innovation";
    var headers = new Headers();
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Content-Type', 'application/json; charset=UTF-8');
    var options = new RequestOptions({ headers: headers });

    return this.http.get(url)
      .toPromise()
      .then(
      response => response.json()
      )
  }

  getBrainstorms(): Promise<Brainstorm[]> {

    var url = AppSettings.HOST_NAME + "/api/Brainstorm";
    var headers = new Headers({ 'Access-Control-Allow-Origin': '*' });
    var options = new RequestOptions({ headers: headers });

    return this.http.get(url, options)
      .toPromise()
      .then(
      response => response.json()
      )
  }

  getExperiments(): Promise<Experiment[]> {

    var url = AppSettings.HOST_NAME + "/api/Brainstorm";
    var headers = new Headers({ 'Access-Control-Allow-Origin': '*' });
    var options = new RequestOptions({ headers: headers });

    return this.http.get(url, options)
      .toPromise()
      .then(
      response => response.json()
      )
  }

  getStandardWorks(): Promise<StandardWork[]> {

    var url = AppSettings.HOST_NAME + "/api/StandardWork";
    var headers = new Headers({ 'Access-Control-Allow-Origin': '*' });
    var options = new RequestOptions({ headers: headers });

    return this.http.get(url, options)
      .toPromise()
      .then(
      response => response.json()
      )
  }

  getRootCauses(): Promise<RootCause[]> {

    var url = AppSettings.HOST_NAME + "/api/RootCause";
    var headers = new Headers({ 'Access-Control-Allow-Origin': '*' });
    var options = new RequestOptions({ headers: headers });

    return this.http.get(url, options)
      .toPromise()
      .then(
      response => response.json()
      )
  }

  getResults(): Promise<Result[]> {

    var url = AppSettings.HOST_NAME + "/api/Result";
    var headers = new Headers({ 'Access-Control-Allow-Origin': '*' });
    var options = new RequestOptions({ headers: headers });

    return this.http.get(url, options)
      .toPromise()
      .then(
      response => response.json()
      )
  }


  getTrainings(): Promise<Training[]> {

    var url = AppSettings.HOST_NAME + "/api/Training";
    var headers = new Headers({ 'Access-Control-Allow-Origin': '*' });
    var options = new RequestOptions({ headers: headers });

    return this.http.get(url, options)
      .toPromise()
      .then(
      response => response.json()
      )
  }

  getInnovation(id: any): Promise<Innovation> {

    var url = AppSettings.HOST_NAME + "/api/Innovation/" + id;
    var headers = new Headers([{ 'Access-Control-Allow-Origin': '*' }, { 'Content-Type': 'application/json; charset=UTF-8' }]);
    var options = new RequestOptions({ headers: headers });

    return this.http.get(url, options)
      .toPromise()
      .then(
      response => response.json()
      )
  }

  getBrainstorm(id: number): Promise<Brainstorm> {

    var url = AppSettings.HOST_NAME + "/api/Brainstorm/" + id;
    var headers = new Headers({ 'Access-Control-Allow-Origin': '*' });
    var options = new RequestOptions({ headers: headers });

    return this.http.get(url, options)
      .toPromise()
      .then(
      response => response.json()
      )
  }

  getExperiment(id: number): Promise<Experiment> {

    var url = AppSettings.HOST_NAME + "/api/Experiment/" + id;
    var headers = new Headers({ 'Access-Control-Allow-Origin': '*' });
    var options = new RequestOptions({ headers: headers });

    return this.http.get(url, options)
      .toPromise()
      .then(
      response => response.json()
      )
  }

  getStandardWork(id: number): Promise<StandardWork> {

    var url = AppSettings.HOST_NAME + "/api/StandardWork/" + id;
    var headers = new Headers({ 'Access-Control-Allow-Origin': '*' });
    var options = new RequestOptions({ headers: headers });

    return this.http.get(url, options)
      .toPromise()
      .then(
      response => response.json()
      )
  }

  getRootCause(id: number): Promise<RootCause> {

    var url = AppSettings.HOST_NAME + "/api/RootCause/" + id;
    var headers = new Headers({ 'Access-Control-Allow-Origin': '*' });
    var options = new RequestOptions({ headers: headers });

    return this.http.get(url, options)
      .toPromise()
      .then(
      response => response.json()
      )
  }

  getResult(id: number): Promise<Result> {

    var url = AppSettings.HOST_NAME + "/api/Result/" + id;
    var headers = new Headers({ 'Access-Control-Allow-Origin': '*' });
    var options = new RequestOptions({ headers: headers });

    return this.http.get(url, options)
      .toPromise()
      .then(
      response => response.json()
      )
  }

  getTraining(id: number): Promise<Training> {

    var url = AppSettings.HOST_NAME + "/api/Training/" + id;
    var headers = new Headers({ 'Access-Control-Allow-Origin': '*' });
    var options = new RequestOptions({ headers: headers });

    return this.http.get(url, options)
      .toPromise()
      .then(
      response => response.json()
      )
  }

}


@Injectable()
export class Settings {

  SIDEBAR_COLOR: string;
  SIDEBAR_IMAGE: string;
  SIDEBAR_WIDTH: string;
  MAIN_WIDTH: String;
  SIDEBAR_SHOW: boolean;

  constructor(private _sanitizer: Sanitizer, private domSanitizer: DomSanitizer) {
    this.SIDEBAR_COLOR = "orange";
    this.SIDEBAR_IMAGE = '/assets/img/sidebar-5.jpg';

    this.SIDEBAR_SHOW = true;
    
    this.resize()
  }

  resize(){
    this.SIDEBAR_WIDTH = this.SIDEBAR_SHOW ? '19%' : '4%';
    this.MAIN_WIDTH = this.SIDEBAR_SHOW ? '81%' : '96%';
  }
}

@Pipe({ name: 'safeStyle' })
export class Safe {
  constructor(private domSanitizer: DomSanitizer) { }

  transform(style) {
    return this.domSanitizer.bypassSecurityTrustStyle(style);
    // return this.sanitizer.bypassSecurityTrustHtml(style);
    // return this.sanitizer.bypassSecurityTrustScript(value);
    // return this.sanitizer.bypassSecurityTrustUrl(value);
    // return this.sanitizer.bypassSecurityTrustResourceUrl(value);
  }
}

