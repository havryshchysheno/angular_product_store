import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { NoContentComponent } from './no-content';
import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
    {
        path: '',
        component: HomeComponent,
        resolve: {
            data: DataResolver
        }
    },
    {path: 'detail', loadChildren: './+item#ItemModule'},
    {path: '**', component: NoContentComponent},
];
