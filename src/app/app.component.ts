import { Component,Sanitizer, SecurityContext, Pipe } from '@angular/core';

import { Settings } from './services/data/data';

import { Safe } from './services/data/data'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[Safe]
})
export class AppComponent {
  title = 'app';
  styleclass: string;
  constructor(private settings: Settings,private _sanitizer: Sanitizer, private _safe: Safe){
    this.styleclass = this.settings.SIDEBAR_COLOR;
  }
}
