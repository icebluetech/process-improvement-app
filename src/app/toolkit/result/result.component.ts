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
declare var $: any;
@Component({
    selector: 'result-dialog',
    templateUrl: 'result.component.html',
    styleUrls: ['result.component.css']
    
})
export class ResultComponent implements OnInit {

    myForm: FormGroup;
    Title: AbstractControl;

    constructor(private _data: Data, private fb: FormBuilder) {

        this.myForm = this.fb.group({
            'Title': ['', Validators.compose([Validators.required])]
        })

        this.Title = this.myForm.controls['Title'];

    }

    ngOnInit() {
        $.getScript('../../../assets/js/bootstrap-checkbox-radio-switch.js');
        $.getScript('../../../assets/js/light-bootstrap-dashboard.js');

        $('[data-toggle="checkbox"]').each(function () {
            if($(this).data('toggle') == 'switch') return;

            var $checkbox = $(this);
            $checkbox.checkbox();
        });
     }

     ngAfterViewChecked() {
        // $('[data-toggle="checkbox"]').each(function () {
        //     if ($(this).data('toggle') == 'switch') return;

        //     var $checkbox = $(this);
        //     $checkbox.checkbox();
        // });
    }

}