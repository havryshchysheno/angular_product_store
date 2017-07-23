import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SharedService } from './services/shared.service';
import { SharedComponents } from './components';
import { OnlyNumber } from './directives/only-number.directive';

@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        ReactiveFormsModule
    ],
    declarations: [
        ...SharedComponents,
        OnlyNumber
    ],
    exports: [
        HttpModule,
        ReactiveFormsModule,
        ...SharedComponents,
        OnlyNumber
    ]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [SharedService]
        };
    }
}
