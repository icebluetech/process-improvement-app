import { Input, Output, EventEmitter, ModuleWithComponentFactories, NgModule, Component, OnInit, AfterViewInit, trigger, state, style, transition, animate, keyframes, Compiler, ViewContainerRef, ViewChild } from '@angular/core';

import { Data } from '../../services/data/data';

import { Process } from '../../model/process';

import { AppModule } from '../../app.module';

@Component({
    moduleId: module.id,
    selector: 'search-cmp',
    templateUrl: 'search.component.html',
    styleUrls: ['search.component.css'],
    animations: [
        trigger('dialog', [
            transition('void => *', [
                style({ transform: 'scale3d(.3, .3, .3)' }),
                animate(100)
            ]),
            transition('* => void', [
                animate(100, style({ transform: 'scale3d(.0, .0, .0)' }))
            ])
        ])
    ]
})

export class SearchComponent {

    showDialog: boolean;
    createNew: boolean;

    @Input() type:string;
    @Output() selectedProcess: EventEmitter<Process> = new EventEmitter<Process>();

    @ViewChild('container', { read: ViewContainerRef }) viewContainer;

    constructor(private _data: Data, private compiler: Compiler) {
        this.results = [];
    }

    ngOnInit() { }

    results: any[];
    term: string;
    selected: Process;

    search() {
        this._data.search(this.type, this.term).then(res => {
            this.results = res;
        })
        return false;
    }

    select(object: any) {
        //var obj =  this.getInstance(this.type, []);
        this.term = object.name;
        this.selectedProcess.emit(object);
        this.showDialog = false;
        return false;
    }

    loadComponent(selector) {
        this.createNew = !this.createNew;
        return false;
    }


}