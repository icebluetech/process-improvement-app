import { AfterViewChecked, ModuleWithComponentFactories, NgModule, Component, OnInit, AfterViewInit, trigger, state, style, transition, animate, keyframes, Compiler, ViewContainerRef, ViewChild } from '@angular/core';
import { Data } from '../../../services/data/data';
import { Innovation } from '../../../model/innovation';
import { Department } from '../../../model/department';
import { InnovationUser } from '../../../model/innovationUser';
import { InnovationCategory } from '../../../model/innovationCategory';
import { InnovationType } from '../../../model/innovationType';
import { AppModule } from '../../../app.module';

import { User } from '../../../model/user';
import { UserRole } from '../../../model/userRole';
import { Process } from '../../../model/process';
import { Widget } from '../../../model/widget';
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

export class InnovationCreateComponent implements OnInit {

    myForm: FormGroup;
    categories: Array<InnovationCategory>;
    departments: Array<Department>;
    innovation: Innovation;
    Title: AbstractControl;
    Type: AbstractControl;
    Date: AbstractControl;
    _fb: FormBuilder;
    showDialog: boolean;
    showRoleDialog: boolean;
    selectedInnoUser : InnovationUser;
    createdBy:InnovationUser;
    private compiler: Compiler;
    @ViewChild('container', { read: ViewContainerRef }) viewContainer;

    constructor(private _data: Data, private fb: FormBuilder) {

        this.myForm = this.fb.group({
            'Title': ['', Validators.compose([Validators.required])],
            'Date': ['']

        })

        this.Title = this.myForm.controls['Title'];
        this.Date = this.myForm.controls['Date'];

    }

    onSubmit(value: string) {

        this.createdBy.typeId = 5; //createdBy
        this.innovation.innovationUsers.push(this.createdBy);

        this.innovation.title = this.Title.value;
        this.innovation.date = this.Date.value;

        this._data.submitInnovation(this.innovation)
            .then(res => {
                console.log('you submitted value: ', value);
            })
    }

    ngOnInit() {
        this.categories = [];
        this.departments = [];
        this.innovation = new Innovation();
        this.innovation.innovationUsers = [];

        this.createdBy = new InnovationUser();
        this.createdBy.user = this._data.getLoggedInUser();
    }

    onUserSelected(user: User) {
        var innoUser = new InnovationUser();
        innoUser.innovation = this.innovation;
        innoUser.user = user;
        this.innovation.innovationUsers.push(innoUser);

        this.showDialog = !this.showDialog;
    }

    onProcessSelected(process: Process) {
        this.innovation.process = process;
    }

    onWidgetSelected(widget: Widget) {
        this.innovation.widget = widget;
    }

    onDepartmentSelected(department: Department) {
        this.innovation.department = department;
    }

    onUserRoleSelected(userRole: UserRole) {
        this.showRoleDialog = !this.showRoleDialog;
        this.selectedInnoUser.type = userRole;
    }

    onInnovationTypeSelected(innovationType: InnovationType) {
        this.innovation.type = innovationType;
    }

    onInnovationCategorySelected(innovationCategory: InnovationCategory) {
        this.innovation.category = innovationCategory;
    }

    setRole(innoUser:InnovationUser){
        this.selectedInnoUser = innoUser;

    }

}
