import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
    selector: 'custom-button',
    templateUrl: './custom-button.component.html',
    styleUrls: ['./custom-button.component.scss']
})
export class CustomButtonComponent {
    @Output() public pressHandler = new EventEmitter<any>();
    @Input() public disabled = false;

    constructor() {
    }

    public handler() {
        this.pressHandler.emit('clicked');
    }
}