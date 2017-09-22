import {
    Component, OnInit, Input, Output, OnChanges, EventEmitter,
    trigger, state, style, animate, transition, ViewChild
} from '@angular/core';
import { Data } from '../../../services/data/data';

import { Process } from '../../../model/process';

@Component({
    moduleId: module.id,
    selector: 'process-search',
    templateUrl: 'process.search.component.html',
    styleUrls: ['process.search.component.css'],
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

export class ProcessSearchComponent {

    @Output() selectedProcess: EventEmitter<Process> = new EventEmitter<Process>();

    constructor(private _data: Data) {
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
        this.selectedProcess.emit(process);
        return false;
    }
}