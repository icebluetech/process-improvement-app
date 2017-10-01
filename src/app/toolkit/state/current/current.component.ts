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

import {ActivatedRoute, Params} from '@angular/router';

import { Data } from '../../../services/data/data';
import { State } from '../../../model/state';

@Component({
    selector: 'current-state',
    templateUrl: 'current.component.html',
    styleUrls: ['current.component.css']

})
export class CurrentStateComponent implements OnInit {

    state:State;
    myForm: FormGroup;
    Provided: AbstractControl;
    TimeTaken: AbstractControl;
    Correct: AbstractControl;
    EmpSatisfied: AbstractControl;
    CustSatisfied: AbstractControl;
    BacklogWork: AbstractControl;
    BacklogNumber: AbstractControl;
    Handoffs: AbstractControl;
    Approvals: AbstractControl;
    ProvidedMeasure:AbstractControl;
    TimeTakenMeasure:AbstractControl;

    InnovationId: number;

    @Output() created: EventEmitter<State> = new EventEmitter<State>();
    

    constructor(private _data: Data, private fb: FormBuilder, private activatedRoute: ActivatedRoute) {

        this.myForm = this.fb.group({
            'Provided': [''],
            'ProvidedMeasure': [''],
            'TimeTaken': [''],
            'TimeTakenMeasure': [''],
            'Correct': [''],
            'EmpSatisfied': [''],
            'CustSatisfied': [''],
            'BacklogWork': [''],
            'BacklogNumber': [''],
            'Handoffs': [''],
            'Approvals': ['']
        })

        this.Provided = this.myForm.controls['Provided'];
        this.ProvidedMeasure = this.myForm.controls['ProvidedMeasure'];
        this.TimeTaken = this.myForm.controls['TimeTaken'];
        this.TimeTakenMeasure = this.myForm.controls['TimeTakenMeasure'];
        this.Correct = this.myForm.controls['Correct'];
        this.EmpSatisfied = this.myForm.controls['EmpSatisfied'];
        this.CustSatisfied = this.myForm.controls['CustSatisfied'];
        this.BacklogWork = this.myForm.controls['BacklogWork'];
        this.BacklogNumber = this.myForm.controls['BacklogNumber'];
        this.Handoffs = this.myForm.controls['Handoffs'];
        this.Approvals = this.myForm.controls['Approvals'];
    }

    ngOnInit() {
        this.activatedRoute.params.subscribe((params: Params) => {
            this.InnovationId = params['id'];
          });
     }


    onSubmit(value: string) {
        this.state = new State();

        this.state.stateTypeId = 1;
        this.state.innovationId = this.InnovationId;

        this.state.provided = this.Provided.value;
        this.state.providedMeasure = this.ProvidedMeasure.value;
        this.state.timeTaken = this.TimeTaken.value;
        this.state.timeTakenMeasure = this.TimeTakenMeasure.value;
        this.state.correct = this.Correct.value;
        this.state.empSatisfied = this.EmpSatisfied.value;
        this.state.custSatisfied = this.CustSatisfied.value;
        this.state.backlogWork = this.BacklogWork.value;
        this.state.backlogNumber = this.BacklogNumber.value;
        this.state.handoffs = this.Handoffs.value;
        this.state.approvals = this.Approvals.value;

        this.created.emit(this.state);
    }

}