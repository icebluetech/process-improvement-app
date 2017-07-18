import { Component, Input, OnInit, OnChanges } from '@angular/core';

import { Data } from '../../services/data/data';

import { AppSettings } from '../../app.settings';

@Component({
    moduleId: module.id,
    selector: 'training-cmp',
    templateUrl: 'training.component.html'
})

export class TrainingComponent implements OnInit {


    constructor(private _data: Data) {

    }

    ngOnInit() {
    }

}