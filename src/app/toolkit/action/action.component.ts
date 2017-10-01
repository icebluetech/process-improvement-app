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
    InnovationId:number;

    @Output() close: EventEmitter<any> = new EventEmitter<any>();
    @Input() parent:any;

    constructor(private _data: Data, private fb: FormBuilder, private activatedRoute: ActivatedRoute) {

        this.myForm = this.fb.group({
            'Reason': ['', Validators.compose([Validators.required])]
        })

        this.Reason = this.myForm.controls['Reason'];

    }
    ngOnInit() {
        this.activatedRoute.params.subscribe((params: Params) => {
            this.InnovationId = params['id'];
          });
     }


    onSubmit(value: string) {
        this.reasonForAction = new ReasonForAction();

        this.reasonForAction.reason = this.Reason.value;
        this.reasonForAction.innovationId = this.InnovationId;

        this._data.insertAny(this.reasonForAction, 'ReasonForAction')
            .then(res => {
                this.close.emit(this.parent);
            })
    }

}