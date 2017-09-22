import {
    Component, OnInit, Input, Output, OnChanges, EventEmitter,
    trigger, state, style, animate, transition, ViewChild
} from '@angular/core';
import { Data } from '../../../services/data/data';

import { User } from '../../../model/user';
import { UserRole } from '../../../model/userRole';

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

    @Input() user: User;

    userRoles: Array<UserRole>;

    constructor(private _data: Data) {
        this.userRoles = [];
    }

    ngOnInit() {
        this.geUserRoles();
    }

    geUserRoles() {
        this._data
            .getUserRoles()
            .then(res => {
                this.userRoles = res;
            })
    }

}