import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IVideo } from '../Ivideo';

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

  constructor(private _route:ActivatedRoute,private _router:Router) {

   }

  ngOnInit(): void {
    let id=+this._route.snapshot.params['id'];
    let title1=this._route.snapshot.params['title'];
    let length=+this._route.snapshot.params['length'];
    let category=this._route.snapshot.params['category'];
    let format=this._route.snapshot.params['format'];


    this.pageTitle+=`:${id}`;
    this.title+= `:${title1}`;
    this.pageLength+= `:${length}`;
    this.pageCat+= `:${category}`;
    this.pageFormat+= `:${format}`;
  }

  onBack():void{
    this._router.navigate(['/videos']);
  }

}
