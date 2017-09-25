import {
    Component, OnInit, Input, Output, OnChanges, EventEmitter,
    trigger, state, style, animate, transition, ViewChild
} from '@angular/core';
import { Data } from '../../../services/data/data';

import { Widget } from '../../../model/widget';

@Component({
    moduleId: module.id,
    selector: 'widget-create',
    templateUrl: 'widget.create.component.html',
    styleUrls: ['widget.create.component.css'],
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

export class WidgetCreateComponent {

    showDialog:boolean;
    widget:Widget;

    @Output() createWidget: EventEmitter<Widget> = new EventEmitter<Widget>();

    constructor(private _data: Data) {
        this.widget = new Widget();
    }

    ngOnInit() { }


    insert() {
        this._data.insertWidget(this.widget).then(res => {
            this.showDialog = false;
            this.createWidget.emit(this.widget);
        })
        return false;
    }
}