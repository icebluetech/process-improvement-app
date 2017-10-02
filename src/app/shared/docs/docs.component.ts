import { Component, Input, OnInit, OnChanges } from '@angular/core';

import { Data } from '../../services/data/data';
import { User } from '../../model/user';

import { AppSettings } from '../../app.settings';

@Component({
    selector: 'docs-cmp',
    templateUrl: 'docs.component.html',
    styleUrls: ['docs.component.css']
})

export class DocsComponent implements OnInit {

    @Input() InnovationId: string;

    attachments: string[];
    attachmentsFriendly: any[];
    uploadSuccess: boolean;
    fileUploader:string;
    user:User;

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

            var user = this._data.getLoggedInUser();

            this.attachmentsFriendly.push({name:file.name, date:new Date().toDateString(), user:user});

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