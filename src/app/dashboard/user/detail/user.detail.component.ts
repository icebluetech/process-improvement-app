import {
    Component, OnInit, Input, Output, OnChanges, EventEmitter,
    trigger, state, style, animate, transition, ViewChild
} from '@angular/core';
import { Data } from '../../../services/data/data';

import { User } from '../../../model/user';

@Component({
    moduleId: module.id,
    selector: 'user-detail',
    templateUrl: 'user.detail.component.html',
    styleUrls: ['user.detail.component.css'],
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

export class UserDetailComponent {

    @Input() closable = true;
    @Input() visible: boolean;
    @Input() user: User;
    @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();
    
    constructor(private _data: Data) {
        
    }

    ngOnInit() { }

    close() {
        this.visible = false;
        this.visibleChange.emit(this.visible);
    }

   
}