import { Component, Output, Input, EventEmitter } from '@angular/core'

@Component({
    selector: 'custom-confirm',
    templateUrl: './custom-confirm.component.html',
    styleUrls: ['./custom-confirm.component.scss']
})

export class CustomConfirmComponent {
    @Output() public pressHandler = new EventEmitter<boolean>();
    @Input() public showConfirm: boolean = false;

    public okHandler() {
        this.pressHandler.emit(true);
    }

    public cancelHandler() {
        this.pressHandler.emit(false);
    }
}