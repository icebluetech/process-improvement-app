import {
    Component, OnInit, Input, Output, OnChanges, EventEmitter,
    trigger, state, style, animate, transition, ViewChild
} from '@angular/core';
import { Data } from '../../../services/data/data';

import { Process } from '../../../model/process';

@Component({
    moduleId: module.id,
    selector: 'process-create',
    templateUrl: 'process.create.component.html',
    styleUrls: ['process.create.component.css'],
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

export class ProcessCreateComponent {

    showDialog:boolean;
    process:Process;

    @Output() selectedProcess: EventEmitter<Process> = new EventEmitter<Process>();

    constructor(private _data: Data) {
        this.process = new Process();
    }

    ngOnInit() { }


    insert() {
        this._data.insertProcess(this.process).then(res => {
            this.showDialog = false;
            this.selectedProcess.emit(this.process);
        })
        return false;
    }
}