import {
    Component, OnInit, Input, Output, OnChanges, EventEmitter,
    trigger, state, style, animate, transition, ViewChild
} from '@angular/core';
import { Data } from '../../../services/data/data';

import { User } from '../../../model/user';
import { ICreateable } from '../../../model/userRole'

@Component({
    moduleId: module.id,
    selector: 'userRole-detail',
    templateUrl: 'userRole.detail.component.html',
    styleUrls: ['userRole.detail.component.css'],
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

export class UserRoleDetailComponent {

    @Input() role: ICreateable.UserRole;

    userRoles: Array<ICreateable.UserRole>;

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