import {
    Component, OnInit, Input, Output, OnChanges, EventEmitter,
    trigger, state, style, animate, transition
} from '@angular/core';

import {
    FormBuilder,
    FormGroup,
    Validators,
    AbstractControl,
    FormControl,
    FormArray,
    ReactiveFormsModule
} from '@angular/forms';

@Component({
    selector: 'action-dialog',
    templateUrl: 'action.component.html',
    styleUrls: ['action.component.css']
    
})
export class ActionComponent implements OnInit {


    constructor() { }

    ngOnInit() { }

}