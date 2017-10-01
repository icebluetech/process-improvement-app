import {
    Component, OnInit, Input, Output, OnChanges, EventEmitter,
    trigger, state, style, animate, transition
} from '@angular/core';

import { ActivatedRoute, Params } from '@angular/router';

import { Data } from '../../services/data/data';
import { State } from '../../model/state';

@Component({
    selector: 'state-cmp',
    templateUrl: 'state.component.html',
    styleUrls: ['state.component.css']

})
export class StateComponent implements OnInit {

    @Output() close: EventEmitter<any> = new EventEmitter<any>();
    @Input() parent: any;

    constructor(private _data: Data) {

    }

    ngOnInit() { }

    save(state: State) {

        this._data.insertAny(state, 'State')
            .then(res => {
                this.close.emit(this.parent);
            })

    }

}