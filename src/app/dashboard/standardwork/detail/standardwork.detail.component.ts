import { Component, state, style, animate, transition, trigger, keyframes, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import { Data } from '../../../services/data/data';
import { StandardWork } from '../../../model/standardWork';
import { StandardWorkCreateComponent } from '../create/standardwork.create.component';

@Component({
    moduleId: module.id,
    selector: 'standardwork-detail-cmp',
    templateUrl: 'standardwork.detail.component.html',
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

export class StandardWorkDetailComponent {
    
    standardWork: StandardWork;

    constructor(private route: ActivatedRoute, private _data: Data) {

    }

    ngAfterViewInit() {
        
    }

    ngOnInit(): void {
        this.route.params.subscribe((params: Params) => {
            this.getStandardWork(params['id'])
        });
    }

    getStandardWork(id: number) {
        this._data.getStandardWork(id).then(res => {
            this.standardWork = res;
        })
    }
}


