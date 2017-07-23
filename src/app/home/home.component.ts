import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/services/shared.service';
import { CartItem } from '../interfaces/cart-item';

@Component({
  selector: 'home',
  styleUrls: [ './home.component.scss' ],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  public shopData: CartItem[] = this.sharedService.getData();
  constructor(private sharedService: SharedService) {}

  public ngOnInit() {
    // console.log(this.shopData);
    // console.log(this.route.snapshot.data['team']);
  }
}
