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
        this.processes = [];
    }

    ngOnInit() { }

    processes: Process[];
    term: string;
    selected: Process;

    search() {
        this._data.searchProcesses(this.term).then(res => {
            this.processes = res;
        })
        return false;
    }

    select(process: Process) {
        this.term = process.name;
        this.selectedProcess.emit(process);
        this.showDialog = false;
        return false;
    }

    loadComponent(selector) {
        this.createNew = !this.createNew;
        return false;
    }


}