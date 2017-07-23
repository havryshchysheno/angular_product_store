import { Component, Input } from '@angular/core';

@Component({
    selector: 'cart-item',
    templateUrl: './cart-item.component.html',
    styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent {
    @Input() public image: string;
    @Input() public title: string;
    @Input() public price: number;
}
