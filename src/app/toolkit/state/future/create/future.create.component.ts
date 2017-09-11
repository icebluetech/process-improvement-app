import { Component, OnInit, AfterViewChecked, state, style, animate, transition, trigger, keyframes } from '@angular/core';
import { Data } from '../../../../services/data/data';
import { Innovation } from '../../../../model/innovation';
import { InnovationUser } from '../../../../model/innovationUser';
import { InnovationCategory } from '../../../../model/innovationCategory';
import {InnovationType} from '../../../../model/innovationType';
import {
    FormBuilder,
    FormGroup,
    Validators,
    AbstractControl,
    FormControl,
    FormArray,
    ReactiveFormsModule
} from '@angular/forms';


declare var $: any;
@Component({
    moduleId: module.id,
    selector: 'future-create-cmp',
    templateUrl: 'future.create.component.html',
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

export class FutureStateCreateComponent implements OnInit, AfterViewChecked {

    myForm: FormGroup;
    categories: Array<InnovationCategory>;
    innovation: Innovation;
    Title: AbstractControl;
    Why: AbstractControl;
    _fb: FormBuilder;

    constructor(private _data: Data, private fb: FormBuilder) {
        this.categories = [];
        this.innovation = new Innovation();

        this.myForm = this.fb.group({
            'Title': ['', Validators.compose([Validators.required])],
            'Why':['']
        })

        this.Title = this.myForm.controls['Title'];
    }

    onSubmit(value: string) {
        this.innovation = new Innovation();
        this.innovation.title = this.Title.value;

        
        this.innovation.innovationCategoryId = 1;
        this.innovation.innovationTypeId = 1;

        this._data.submitInnovation(this.innovation)
            .then(res => {
                console.log('you submitted value: ', value);
            })
    }

    ngOnInit() {
        this.getCategories();

        this.innovation.innovationUsers = [];
        var user = new InnovationUser();
        user.innovationId = 1;
        user.userId=1;
        this.innovation.innovationUsers.push(user);
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
