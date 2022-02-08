import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { IVideo } from '../Ivideo';
@Component({
  selector: 'app-videodetail',
  templateUrl: './videodetail.component.html',
  styleUrls: ['./videodetail.component.css']
})
export class VideodetailComponent implements OnInit {
  pageTitle:string='Video Detail';
  video!:IVideo;
  constructor(private _route:ActivatedRoute,private _router:Router) {

   }

  ngOnInit(): void {
    let id=+this._route.snapshot.params['id']; 
    this.pageTitle+=`:${id}`; 
  }
  onBack():void{
    this._router.navigate(['/videos']);
  }

}
