import { Component, state, style, animate, transition, trigger, keyframes, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import { Data } from '../../../../services/data/data';
import { CurrentStateCreateComponent } from '../create/current.create.component';

@Component({
    moduleId: module.id,
    selector: 'current-detail-cmp',
    templateUrl: 'current.detail.component.html',
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

export class CurrentStateDetailComponent {
    
    constructor(private route: ActivatedRoute, private _data: Data) {

    }

    ngAfterViewInit() {
        
    }

    ngOnInit(): void {
        this.route.params.subscribe((params: Params) => {
            this.getBrainstorm(params['id'])
        });
    }

    getBrainstorm(id: number) {
        this._data.getBrainstorm(id).then(res => {
            
        })
    }
}


