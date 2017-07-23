import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'upload-file',
    templateUrl: './upload-input.component.html',
    styleUrls: ['./upload-input.component.scss']
})

export class UploadInputComponent {
    public valid: boolean = true;
    @Output() private uploadFile = new EventEmitter<any>();

    public changeHandler(event) {
        const file = event.target.files[0];
        const fileType = file.name.split('.').reverse()[0];
        if (fileType.toLowerCase() === 'png' || fileType.toLowerCase() === 'jpg') {
            this.uploadFile.emit(event.target.files[0]);
            this.valid = true;
        } else {
            this.valid = false;
        }
        event.target.value = '';
    }
}