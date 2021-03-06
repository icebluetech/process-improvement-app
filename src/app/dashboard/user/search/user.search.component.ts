import {
    Component, OnInit, Input, Output, OnChanges, EventEmitter,
    trigger, state, style, animate, transition, ViewChild
} from '@angular/core';
import { Data } from '../../../services/data/data';

import { User } from '../../../model/user';

@Component({
    moduleId: module.id,
    selector: 'user-search',
    templateUrl: 'user.search.component.html',
    styleUrls: ['user.search.component.css'],
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

export class UserSearchComponent {

    @Output() done: EventEmitter<boolean> = new EventEmitter<boolean>();
    @Output() selectedUser: EventEmitter<User> = new EventEmitter<User>();

    constructor(private _data: Data) {
        this.users = [];
    }

    ngOnInit() { }

    users: User[];
    term:string;
    selected:User;

    search() {
        this._data.searchUsers(this.term).then(res => {
            this.users = res;
        })
        return false;
    }

    select(user:User){
        this.selectedUser.emit(user);
        return false;
    }
}