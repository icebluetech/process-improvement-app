import {
    Component, OnInit, Input, Output, OnChanges, EventEmitter,
    trigger, state, style, animate, transition
} from '@angular/core';

declare var $: any;
@Component({
    selector: 'brainstorm-dialog',
    templateUrl: 'brainstorm.component.html',
    styleUrls: ['brainstorm.component.css']
    
})
export class BrainstormComponent implements OnInit {

    categories:any[]

    constructor() {
        this.categories = [];
        this.categories.push("Defects","Overprocessing","Waiting","Non utilized talent","Tranprtation","Inventory","Motion","Excessive Processing")
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