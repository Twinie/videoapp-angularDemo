import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IVideo } from '../Ivideo';
import { VideoService } from '../video.service';

@Component({
  selector: 'app-videodetail',
  templateUrl: './videodetail.component.html',
  styleUrls: ['./videodetail.component.css']
})
export class VideodetailComponent implements OnInit {
pageTitle:string='Video Detail';
title:string='Title';
pageLength:string='Length';
pageCat:string='Category';
pageFormat:string='Format';

video!:IVideo;

  constructor(private _route:ActivatedRoute,private _router:Router, private _videoservice:VideoService) {

   }

  ngOnInit(): void {
    let id=+this._route.snapshot.params['id'];
  
    this.pageTitle+=`:${id}`;
    this._videoservice.getOneVideo(id).subscribe(x=> this.video=x);
  }

  onBack():void{
    this._router.navigate(['/videos']);
  }

}
