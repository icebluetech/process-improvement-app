import { ModuleWithComponentFactories, NgModule, Component, OnInit, AfterViewInit, trigger, state, style, transition, animate, keyframes, Compiler, ViewContainerRef, ViewChild } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Data } from '../../services/data/data';
import { Innovation } from '../../model/innovation';
import { AppModule } from '../../app.module';

import { Observable } from 'rxjs/Observable';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import initDemo = require('../../../assets/js/charts.js');

declare var $: any;

@Component({
    moduleId: module.id,
    selector: 'toolkit-home',
    templateUrl: 'home.component.html',
    styleUrls:['home.component.css'],
    animations: [
        trigger('cardtable1', [
            state('*', style({
                '-ms-transform': 'translate3D(0px, 0px, 0px)',
                '-webkit-transform': 'translate3D(0px, 0px, 0px)',
                '-moz-transform': 'translate3D(0px, 0px, 0px)',
                '-o-transform': 'translate3D(0px, 0px, 0px)',
                transform: 'translate3D(0px, 0px, 0px)',
                opacity: 1
            })),
            transition('void => *', [
                style({
                    opacity: 0,
                    '-ms-transform': 'translate3D(0px, 150px, 0px)',
                    '-webkit-transform': 'translate3D(0px, 150px, 0px)',
                    '-moz-transform': 'translate3D(0px, 150px, 0px)',
                    '-o-transform': 'translate3D(0px, 150px, 0px)',
                    transform: 'translate3D(0px, 150px, 0px)',
                }),
                animate('0.3s 0s ease-out')
            ])
        ]),
        trigger('cardtable2', [
            state('*', style({
                '-ms-transform': 'translate3D(0px, 0px, 0px)',
                '-webkit-transform': 'translate3D(0px, 0px, 0px)',
                '-moz-transform': 'translate3D(0px, 0px, 0px)',
                '-o-transform': 'translate3D(0px, 0px, 0px)',
                transform: 'translate3D(0px, 0px, 0px)',
                opacity: 1
            })),
            transition('void => *', [
                style({
                    opacity: 0,
                    '-ms-transform': 'translate3D(0px, 150px, 0px)',
                    '-webkit-transform': 'translate3D(0px, 150px, 0px)',
                    '-moz-transform': 'translate3D(0px, 150px, 0px)',
                    '-o-transform': 'translate3D(0px, 150px, 0px)',
                    transform: 'translate3D(0px, 150px, 0px)',
                }),
                animate('0.3s 0.25s ease-out')
            ])
        ])
    ]
})

export class HomeComponent implements OnInit {

    showDialog: boolean;

    innovation: Innovation;

    @ViewChild('container', { read: ViewContainerRef }) viewContainer;

    constructor(private _data: Data,
        private compiler: Compiler,
        private route: ActivatedRoute,
        private router: Router) {
    }

    ngOnInit() {

        let id = this.route.snapshot.paramMap.get('id');

        this._data.getInnovation(id).then(res => {
            this.innovation = res;
        });

        // this.innovation$ = this.route.paramMap
        //     .switchMap((params: ParamMap) => {
        //         return this._data.getInnovation(params.get('id'))
        //     });
    }

    loadComponent(selector) {
        this.showDialog = !this.showDialog;

        this.compiler.compileModuleAndAllComponentsAsync(AppModule)
            .then((moduleWithComponentFactory: ModuleWithComponentFactories<any>) => {
                const componentFactory = moduleWithComponentFactory.componentFactories
                    .find(x => x.selector === selector);
                this.viewContainer.clear();
                return this.viewContainer.createComponent(componentFactory);
            });
    }
}
