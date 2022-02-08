import {Injectable} from '@angular/core';
import { IVideo } from './Ivideo';
import {HttpClient} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map,catchError } from 'rxjs/operators';

@Injectable({providedIn:'root'})

export class VideoService{
    private serviceUrl='https://marutivideo.azurewebsites.net/api/videos';    
    constructor( private _httpclient:HttpClient) {      

    }
    getVideos():Observable<IVideo[]>{
        return this._httpclient.get(this.serviceUrl)
        .pipe(map(allvideos=><IVideo[]>allvideos),
        catchError(()=>{return throwError("Something went wrong")}));
    }
    addVideo(body:any):Observable<IVideo[]>{
        return this._httpclient.post(this.serviceUrl,body)
        .pipe(map(allvideos=><IVideo[]>allvideos),
        catchError(()=>{return throwError("Something went wrong")}));
    }
}