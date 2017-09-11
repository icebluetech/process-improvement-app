import { ModuleWithComponentFactories, NgModule, Component, OnInit, AfterViewInit, trigger, state, style, transition, animate, keyframes, Compiler, ViewContainerRef, ViewChild } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Data } from '../../services/data/data';
import { Innovation } from '../../model/innovation';
import { AppModule } from '../../app.module';

import initDemo = require('../../../assets/js/charts.js');

declare var $: any;

@Component({
    moduleId: module.id,
    selector: 'innovation-cmp',
    templateUrl: 'innovation.component.html',
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

export class InnovationComponent implements OnInit {
    innovations: Innovation[];
    showDialog: boolean;
    @ViewChild('container', { read: ViewContainerRef }) viewContainer;

    constructor(private _data: Data, private compiler: Compiler) {
        this.innovations = [];
        this.getInnovations();
    }

    ngOnInit() {
        //$.getScript('../../../assets/js/light-bootstrap-dashboard.js');

        initDemo();
    }

    getInnovations() {
        this._data.getInnovations().then(res => {
            this.innovations = res;
        })
    }

    loadComponent(selector) {
        this.showDialog = !this.showDialog;
        
        this.compiler.compileModuleAndAllComponentsAsync(AppModule)
            .then((moduleWithComponentFactory: ModuleWithComponentFactories<any>) => {
                const componentFactory = moduleWithComponentFactory.componentFactories
                    .find(x => x.selector === selector);
                return this.viewContainer.createComponent(componentFactory);
            });
    }
}
