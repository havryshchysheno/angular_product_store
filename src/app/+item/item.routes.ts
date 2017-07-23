import { ItemComponent } from './item.component';

export const routes = [
  { path: '', children: [
    { path: '', component: ItemComponent }
  ]},
];
