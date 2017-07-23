import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { SharedService } from './shared/services/shared.service';
import 'rxjs/add/observable/of';

@Injectable()
export class DataResolver implements Resolve<any> {
    constructor(private sharedService: SharedService) {
    }

    public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.sharedService.storeDefaultData();
    }
}

export const APP_RESOLVER_PROVIDERS = [
    DataResolver
];
