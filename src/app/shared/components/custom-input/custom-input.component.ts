import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'custom-input',
    templateUrl: './custom-input.component.html',
    styleUrls: ['./custom-input.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => CustomInputComponent),
            multi: true
        }
    ]
})
export class CustomInputComponent implements ControlValueAccessor {
    @Input() public value: string = '';
    @Input() public placeholder: string;
    @Input() public edit: boolean = true;
    @Input() public type: string;

    public propagateChange: any = () => {
    };
    public validateFn: any = () => {
    };

    public changeHandler(event) {
        this.value = event.target.value;
        this.propagateChange(this.value);
    }

    public writeValue(value) {
        if (value === 0) {
            this.value = ''
        } else {
            this.value = value;
        }
    }

    public registerOnChange(fn) {
        this.propagateChange = fn;
    }

    public registerOnTouched() {
    }
}
