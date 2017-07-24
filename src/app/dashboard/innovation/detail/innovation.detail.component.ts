import { Component, state, style, animate, transition, trigger, keyframes, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import { Data } from '../../../services/data/data';
import { Innovation } from '../../../model/innovation';
import { CreateComponent } from '../create/innovation.create.component';

@Component({
    moduleId: module.id,
    selector: 'innovation-detail-cmp',
    templateUrl: 'innovation.detail.component.html',
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

export class DetailComponent {
    innovation: Innovation;

    @ViewChild(CreateComponent) createComponent: CreateComponent;

    constructor(private route: ActivatedRoute, private _data: Data) {

    }

    ngAfterViewInit() {
        
    }

    ngOnInit(): void {
        this.route.params.subscribe((params: Params) => {
            this.getInnovation(params['id'])
        });
    }
    getInnovation(id: number) {
        this._data.getInnovation(id).then(res => {
            this.innovation = res;
            this.populateForm();
        })
    }

    populateForm(){
        this.createComponent.innovation.id = this.innovation.id;
        this.createComponent.Title.setValue(this.innovation.title);
        this.createComponent.innovation.why = "WHY TELL ME WHY";
        this.createComponent.innovation.innovationUsers = this.innovation.innovationUsers;
    }
}


