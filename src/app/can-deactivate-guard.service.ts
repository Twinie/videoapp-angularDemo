

import { Injectable } from "@angular/core"; 
import { RouterStateSnapshot, ActivatedRouteSnapshot, CanDeactivate, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
export interface CanComponentDeactive{
   canDeactivate:()=> Observable<boolean | UrlTree> | boolean | UrlTree | Promise<boolean | UrlTree>;
}
@Injectable(
    {providedIn:'root'}
)
export class CanDeactivateGuardService implements CanDeactivate<CanComponentDeactive> {
    constructor(){    }
    canDeactivate(component: CanComponentDeactive, route: ActivatedRouteSnapshot, state: RouterStateSnapshot) 
    {
        return component.canDeactivate ? component.canDeactivate():true;
    }
   
}