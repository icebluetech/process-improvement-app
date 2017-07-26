import { Component, Input, OnInit, OnChanges } from '@angular/core';

import { Data } from '../../services/data/data';

import { AppSettings } from '../../app.settings';

import initDemo = require('../../../assets/js/charts.js');

import { Training } from '../../model/training';

@Component({
    moduleId: module.id,
    selector: 'training-cmp',
    templateUrl: 'training.component.html'
})

export class TrainingComponent implements OnInit {


    trainings: Training[];

    constructor(private _data: Data) {
        this.trainings = [];
        this.getTrainings();
    }

    ngOnInit() {
        initDemo();
    }

    getTrainings() {
        this._data.getTrainings().then(res => {
            this.trainings = res;
        })
    }

}