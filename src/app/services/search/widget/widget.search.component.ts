import {
    Component, OnInit, Input, Output, OnChanges, EventEmitter,
    trigger, state, style, animate, transition, ViewChild
} from '@angular/core';
import { Data } from '../../../services/data/data';

import { Widget } from '../../../model/widget';

@Component({
    moduleId: module.id,
    selector: 'widget-search',
    templateUrl: 'widget.search.component.html',
    styleUrls: ['widget.search.component.css'],
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

export class WidgetSearchComponent {

    @Output() selectedUser: EventEmitter<Widget> = new EventEmitter<Widget>();

    constructor(private _data: Data) {
        this.widgets = [];
    }

    ngOnInit() { }

    widgets: Widget[];
    term:string;
    selected:Widget;

    search() {
        this._data.searchWidgets(this.term).then(res => {
            this.widgets = res;
        })
        return false;
    }

    select(widget:Widget){
        this.selectedUser.emit(widget);
        return false;
    }
}