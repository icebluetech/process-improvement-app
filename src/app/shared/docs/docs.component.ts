import { Component, Input, OnInit, OnChanges } from '@angular/core';

import { Data } from '../../services/data/data';

import { AppSettings } from '../../app.settings';

@Component({
    selector: 'docs-cmp',
    templateUrl: 'docs.component.html'
})

export class DocsComponent implements OnInit {

    @Input() InnovationId: string;

    attachments: string[];
    attachmentsFriendly: any[];
    uploadSuccess: boolean;
    fileUploader:string;

    constructor(private _data: Data) {

    }

    ngOnInit() {
        this.attachments = [];
        this.attachmentsFriendly = [];
        
    }

    onChange(event: any) {

        var files = event.srcElement.files;

        var file = files[0];

        var url = AppSettings.HOST_NAME + "/api/docs";

        this._data.makeFileRequest(url, [], files).subscribe((res) => {

            this.attachmentsFriendly.push({name:file.name, date:new Date('YYYY-m-d'), user:'Chris Cheshire'});

            this.attachments.push(file);

            this.uploadSuccess = true

            this.fileUploader = 'fdk;sdlfk'; 

            return false;

        });
        
    }

    submit(){
        var url = AppSettings.HOST_NAME + "/api/docs";

        this._data.makeFileRequest(url, [], this.attachments).subscribe((res) => {

            return false;

        });
    }
}