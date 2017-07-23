import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'custom-textarea',
    templateUrl: './custom-textarea.component.html',
    styleUrls: ['./custom-textarea.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => CustomTextareaComponent),
            multi: true
        }
    ]
})
export class CustomTextareaComponent implements ControlValueAccessor {
    @Input() public value: string = '';
    @Input() public placeholder: string;
    @Input() public edit: boolean = true;

    public propagateChange: any = () => {
    };
    public validateFn: any = () => {
    };

    public changeHandler(event) {
        this.value = event.target.value;
        this.propagateChange(this.value);
    }

    public writeValue(value) {
        this.value = value;
    }

    public registerOnChange(fn) {
        this.propagateChange = fn;
    }

    public registerOnTouched() {
    }
}
