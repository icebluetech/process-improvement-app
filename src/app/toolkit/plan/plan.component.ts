import {
    Component, OnInit, Input, Output, OnChanges, EventEmitter,
    trigger, state, style, animate, transition
} from '@angular/core';

declare var $: any;
@Component({
    selector: 'plan-dialog',
    templateUrl: 'plan.component.html',
    styleUrls: ['plan.component.css']
    
})
export class PlanComponent implements OnInit {

    categories:any[]

    constructor() {
        this.categories = [];
        this.categories.push("Continous Flow","Eliminate Branching","Eliinate Handoffs","5S/6S")
     }

    ngOnInit() {
        $.getScript('../../../assets/js/bootstrap-checkbox-radio-switch.js');
        $.getScript('../../../assets/js/light-bootstrap-dashboard.js');

        $('[data-toggle="checkbox"]').each(function () {
            if($(this).data('toggle') == 'switch') return;

            var $checkbox = $(this);
            $checkbox.checkbox();
        });
     }

     ngAfterViewChecked() {
        // $('[data-toggle="checkbox"]').each(function () {
        //     if ($(this).data('toggle') == 'switch') return;

        //     var $checkbox = $(this);
        //     $checkbox.checkbox();
        // });
    }

}