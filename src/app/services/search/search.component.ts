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

export class SearchComponent implements OnInit {

    showDialog: boolean;
    createNew: boolean;
    label: string;
    results: any[];
    term: string;

    @Input() type: string;
    @Output() selected: EventEmitter<any> = new EventEmitter<any>();

    @ViewChild('container', { read: ViewContainerRef }) viewContainer;

    constructor(private _data: Data, private compiler: Compiler) {
        this.results = [];
    }

    ngOnInit() {
       this.label = this.type;
       this.label = this.label.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/([A-Z])([a-z])/g, ' $1$2').replace(/\ +/g, ' ');
       
    }

    search() {
        this._data.search(this.type, this.term).then(res => {
            this.results = res;
        })
        return false;
    }

    select(object: any) {
        this.term = object.name;
        this.selected.emit(object);
        this.showDialog = false;
        return false;
    }

    loadComponent(selector) {
        this.createNew = !this.createNew;
        return false;
    }


}