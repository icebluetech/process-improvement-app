import { AfterViewChecked, ModuleWithComponentFactories, NgModule, Component, OnInit, AfterViewInit, trigger, state, style, transition, animate, keyframes, Compiler, ViewContainerRef, ViewChild } from '@angular/core';
import { Data } from '../../../services/data/data';
import { Innovation } from '../../../model/innovation';
import { InnovationUser } from '../../../model/innovationUser';
import { InnovationCategory } from '../../../model/innovationCategory';
import {InnovationType} from '../../../model/innovationType';
import { AppModule } from '../../../app.module';

import { User } from '../../../model/user';
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
    selector: 'innovation-create-cmp',
    templateUrl: 'innovation.create.component.html',
    styleUrls: ['./innovation.create.component.css'],
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

export class InnovationCreateComponent implements OnInit, AfterViewChecked {

    myForm: FormGroup;
    categories: Array<InnovationCategory>;
    innovation: Innovation;
    Title: AbstractControl;
    Type: AbstractControl;
    Process: AbstractControl;
    Widget: AbstractControl;
    Date: AbstractControl;
    _fb: FormBuilder;
    showDialog: boolean;
    private compiler: Compiler;
    @ViewChild('container', { read: ViewContainerRef }) viewContainer;

    constructor(private _data: Data, private fb: FormBuilder) {
        this.categories = [];
        this.innovation = new Innovation();

        this.myForm = this.fb.group({
            'Title': ['', Validators.compose([Validators.required])],
            'Type':[''],
            'Process':[''],
            'Widget':[''],
            'Date':['']

        })

        this.Title = this.myForm.controls['Title'];
        this.Type = this.myForm.controls['Type'];
        this.Process = this.myForm.controls['Process'];
        this.Widget = this.myForm.controls['Widget'];
        this.Date = this.myForm.controls['Date'];

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

    onUserSelected(user:User){
        var innoUser = new InnovationUser();
        innoUser.innovation = this.innovation;
        innoUser.user = user;
        this.innovation.innovationUsers.push(innoUser);
    }

    // loadComponent(selector) {
    //     this.showDialog = !this.showDialog;

    //     this.compiler.compileModuleAndAllComponentsAsync(AppModule)
    //         .then((moduleWithComponentFactory: ModuleWithComponentFactories<any>) => {
    //             const componentFactory = moduleWithComponentFactory.componentFactories
    //                 .find(x => x.selector === selector);
    //             this.viewContainer.clear();
    //             return this.viewContainer.createComponent(componentFactory);
    //         });
    // }
}
