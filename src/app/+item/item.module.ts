import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './item.routes';
import { ItemContainers } from './containers';
import { ItemComponent } from './item.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
    declarations: [
        ItemComponent,
        ...ItemContainers
    ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild(routes),
    ],
})
export class ItemModule {
    public static routes = routes;
}
