import { Injectable  } from "@angular/core"
import { Router, ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Route } from "@angular/router"
import { observable } from "rxjs";

@Injectable(
    {providedIn:'root'}
)

export class VideoGuardService implements CanActivate {
    constructor(private _router:Router){

    }
    canActivate(route: ActivatedRouteSnapshot): boolean {
        let id =+route.url[1].path;
        if(isNaN(id) || id<1){
            alert('invalid video Id');
            this._router.navigate(['/videos']);
            return false;
        }
        return true;
    }
}