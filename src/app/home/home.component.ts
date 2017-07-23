import { Component } from '@angular/core';
import { SharedService } from '../shared/services/shared.service';
import { CartItem } from '../interfaces/cart-item';

@Component({
  selector: 'home',
  styleUrls: [ './home.component.scss' ],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  public shopData: CartItem[] = this.sharedService.getData();
  constructor(private sharedService: SharedService) {}
}
