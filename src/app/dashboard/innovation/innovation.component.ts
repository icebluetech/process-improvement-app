import { Component, OnInit, AfterViewInit, trigger, state, style, transition, animate, keyframes } from '@angular/core';
import { Data } from '../../services/data/data';
import { Innovation } from '../../model/innovation';
import { InnovationViewModel } from '../../viewmodels/innovation-vm';

@Component({
    moduleId: module.id,
    selector: 'innovation-cmp',
    templateUrl: 'innovation.component.html',
    styleUrls: ['./innovation.component.css'],
    animations: [
        trigger('cardtable1', [
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
                animate('0.3s 0s ease-out')
            ])
        ]),
        trigger('cardtable2', [
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
                animate('0.3s 0.25s ease-out')
            ])
        ])
    ]
})

export class InnovationComponent implements OnInit {
    innovations: InnovationViewModel[];

    constructor(private _data: Data) {
        this.innovations = [];
        this.getInnovations();
    }

    ngOnInit() {

    }

    getInnovations() {
        this._data.getInnovations().then(res => {
            this.innovations = res;
        })
    }
}
