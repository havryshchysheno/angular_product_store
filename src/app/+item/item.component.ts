import { Component, OnInit, } from '@angular/core';
import { SharedService } from '../shared/services/shared.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'detail',
  template: `<item-details></item-details>`
})
export class ItemComponent implements OnInit {

  constructor(private sharedService: SharedService, private router: ActivatedRoute) {}

  public ngOnInit() {
    // console.log('hello `Detail` component');
    // console.log(this.router.snapshot.queryParams.id);
    // console.log(this.sharedService.getItemById(+this.router.snapshot.queryParams.id));
  }

}
