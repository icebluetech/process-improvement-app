import { Component, OnInit, AfterViewChecked, state, style, animate, transition, trigger, keyframes } from '@angular/core';
import { Data } from '../../../services/data/data';
import { Innovation } from '../../../model/innovation';
import { InnovationUser } from '../../../model/innovationUser';
import {
    FormBuilder,
    FormGroup,
    Validators,
    AbstractControl,
    FormControl,
    FormArray,
    ReactiveFormsModule
} from '@angular/forms';

import { InnovationCategory } from '../../../model/innovationCategory';
declare var $: any;
@Component({
    moduleId: module.id,
    selector: 'innovation-create-cmp',
    templateUrl: 'innovation.create.component.html',
    animations: [
        trigger('carduserprofile', [
            state('*', style({
                '-ms-transform': 'translate3D(0px, 0px, 0px)',
                '-webkit-transform': 'translate3D(0px, 0px, 0px)',
                '-moz-transform': 'translate3D(0px, 0px, 0px)',
                '-o-transform': 'translate3D(0px, 0px, 0px)',
                transform: 'translate3D(0px, 0px, 0px)',
                opacity: 1
            })),
            transition('void => *', [
                style({
                    opacity: 0,
                    '-ms-transform': 'translate3D(0px, 150px, 0px)',
                    '-webkit-transform': 'translate3D(0px, 150px, 0px)',
                    '-moz-transform': 'translate3D(0px, 150px, 0px)',
                    '-o-transform': 'translate3D(0px, 150px, 0px)',
                    transform: 'translate3D(0px, 150px, 0px)',
                }),
                animate('0.3s 0s ease-out'),
            ])
        ])]
})

export class CreateComponent implements OnInit, AfterViewChecked {

    myForm: FormGroup;
    categories: Array<InnovationCategory>;
    innovation: Innovation;
    Title: AbstractControl;
    _fb: FormBuilder;

    constructor(private _data: Data, private fb: FormBuilder) {
        this.categories = [];
        this.innovation = new Innovation();

        this.myForm = this.fb.group({
            'Title': ['', Validators.compose([Validators.required])]
        })

        this.Title = this.myForm.controls['Title'];
    }

    onSubmit(value: string) {
        this.innovation = new Innovation();
        this.innovation.Title = this.Title.value;

        this.innovation.InnovationUsers = [];
        var user = new InnovationUser();
        user.InnovationId = 1;
        user.UserId=1;
        this.innovation.InnovationUsers.push(user);

        this._data.submitInnovation(this.innovation)
            .then(res => {
                console.log('you submitted value: ', value);
            })
    }

    ngOnInit() {
        this.getCategories();
    }

    ngAfterViewChecked() {
        $('[data-toggle="checkbox"]').each(function () {
            if ($(this).data('toggle') == 'switch') return;

            var $checkbox = $(this);
            $checkbox.checkbox();
        });
    }

    getCategories() {
        this._data
            .getItems()
            .then(res => {
                this.categories = res;
            })
    }
}
