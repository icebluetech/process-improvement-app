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
import { User } from '../../model/user';
import { ActionPlan } from '../../model/actionplan';

declare var $: any;
@Component({
    selector: 'plan-dialog',
    templateUrl: 'plan.component.html',
    styleUrls: ['plan.component.css']

})
export class PlanComponent implements OnInit {

    myForm: FormGroup;
    Title: AbstractControl;
    rows: ActionPlan[];
    row:ActionPlan;

    constructor(private _data: Data, private fb: FormBuilder) {

        this.myForm = this.fb.group({
            'Title': ['', Validators.compose([Validators.required])]
        })

        this.Title = this.myForm.controls['Title'];

    }

    ngOnInit() {
        this.rows = [];
        this.addRow();
    }

    onUserSelected(user: User) {
        this.row.user = user;
    }

    addRow(){
        this.rows.push(new ActionPlan());
    }

    setRow(row:ActionPlan){
        this.row = row;
    }

    ngAfterViewChecked() {

    }

}