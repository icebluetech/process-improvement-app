import { Component, state, style, animate, transition, trigger, keyframes, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import { Data } from '../../../services/data/data';
import { Training } from '../../../model/training';
import { TrainingCreateComponent } from '../create/training.create.component';

@Component({
    moduleId: module.id,
    selector: 'training-detail-cmp',
    templateUrl: 'training.detail.component.html',
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

export class TrainingDetailComponent {
    
    training: Training;

    constructor(private route: ActivatedRoute, private _data: Data) {

    }

    ngAfterViewInit() {
        
    }

    ngOnInit(): void {
        this.route.params.subscribe((params: Params) => {
            this.getTraining(params['id'])
        });
    }

    getTraining(id: number) {
        this._data.getTraining(id).then(res => {
            this.training = res;
        })
    }
}


