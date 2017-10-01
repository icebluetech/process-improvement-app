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

import { Data } from '../../services/data/data';
import { ReasonForAction } from '../../model/reasonforaction';
@Component({
    selector: 'action-dialog',
    templateUrl: 'action.component.html',
    styleUrls: ['action.component.css']

})
export class ActionComponent implements OnInit {

    reasonForAction: ReasonForAction;
    myForm: FormGroup;
    Reason: AbstractControl;

    constructor(private _data: Data, private fb: FormBuilder) {

        this.myForm = this.fb.group({
            'Reason': ['', Validators.compose([Validators.required])]
        })

        this.Reason = this.myForm.controls['Reason'];

    }
    ngOnInit() { }

    onSubmit(value: string) {

        this.reasonForAction = new ReasonForAction();

        this.reasonForAction.reason = this.Reason.value;

        this._data.insertAny(this.reasonForAction, 'ReasonForAction')
            .then(res => {
                console.log('you submitted value: ', value);
            })
    }

}