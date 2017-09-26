import {
    Component, OnInit, Input, Output, OnChanges, EventEmitter,
    trigger, state, style, animate, transition, ViewChild
} from '@angular/core';
import { Data } from '../../services/data/data';

import { ICreateable } from '../../model/generics';

import { Process } from '../../model/process';

@Component({
    moduleId: module.id,
    selector: 'create-cmp',
    templateUrl: 'create.component.html',
    styleUrls: ['create.component.css'],
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

export class CreateComponent implements OnInit {

    showDialog: boolean;
    object: Process;

    @Input() type: string;

    @Output() createdObject: EventEmitter<any> = new EventEmitter<any>();

    constructor(private _data: Data) {
        
    }

    getInstance(name: string, args: any[]) {
        var instance = Object.create(ICreateable[name].prototype);
        instance.constructor.apply(instance, args);
        return instance;
    }

    ngOnInit(){
        this.object = this.getInstance(this.type, []);
    }

    insert() {
        this._data.insertAny(this.object, this.type).then(res => {
            this.showDialog = false;
            this.createdObject.emit(this.object);
        })
        return false;
    }
}