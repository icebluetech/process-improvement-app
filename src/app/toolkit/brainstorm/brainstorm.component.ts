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
    selector: 'brainstorm-dialog',
    templateUrl: 'brainstorm.component.html',
    styleUrls: ['brainstorm.component.css']
    
})
export class BrainstormComponent implements OnInit {

    categories:any[]

    myForm: FormGroup;
    Title: AbstractControl;

    constructor(private _data: Data, private fb: FormBuilder) {

        this.myForm = this.fb.group({
            'Title': ['', Validators.compose([Validators.required])]
        })

        this.Title = this.myForm.controls['Title'];

    
        this.categories = [];
        this.categories.push("Defects","Overprocessing","Waiting","Non utilized talent","Tranprtation","Inventory","Motion","Excessive Processing")
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