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

import { Data } from '../../../services/data/data';

@Component({
    selector: 'current-state',
    templateUrl: 'current.component.html',
    styleUrls: ['current.component.css']
    
})
export class CurrentStateComponent implements OnInit {

    myForm: FormGroup;
    Title: AbstractControl;

    constructor(private _data: Data, private fb: FormBuilder) {

        this.myForm = this.fb.group({
            'Title': ['', Validators.compose([Validators.required])]
        })

        this.Title = this.myForm.controls['Title'];

    }

    ngOnInit() { }

}