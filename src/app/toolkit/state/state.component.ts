import {
    Component, OnInit, Input, Output, OnChanges, EventEmitter,
    trigger, state, style, animate, transition
} from '@angular/core';

import { ActivatedRoute, Params } from '@angular/router';

import { Data } from '../../services/data/data';
import { State } from '../../model/state';
import { Innovation } from '../../model/innovation';
import { Widget } from '../../model/widget';

@Component({
    selector: 'state-cmp',
    templateUrl: 'state.component.html',
    styleUrls: ['state.component.css']

})
export class StateComponent implements OnInit {

    @Output() close: EventEmitter<any> = new EventEmitter<any>();
    @Input() parent: any;

    innovation:Innovation;

    constructor(private _data: Data, private activatedRoute: ActivatedRoute) {
        this.innovation = new Innovation();
        this.innovation.widget = new Widget();
    }

    ngOnInit() {
        this.activatedRoute.params.subscribe((params: Params) => {
            this._data.getInnovation(params['id']).then(res=>{
                this.innovation = res;
            });
          });
     }

    save(state: State) {
        state.innovationId = this.innovation.id;
        state.widgetId = this.innovation.widgetId;

        this._data.insertAny(state, 'State')
            .then(res => {
                this.close.emit(this.parent);
            })

    }

}