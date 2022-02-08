import { Component, OnInit } from '@angular/core';
import { IVideo } from '../Ivideo';
import { VideoService } from '../video.service';
@Component({
  selector: 'app-videolist',
  templateUrl: './videolist.component.html',
  styleUrls: ['./videolist.component.css']
  
})
export class VideolistComponent implements OnInit {
  myvideos:IVideo[]=[];  
  constructor(private _videoservice:VideoService) {   
     
  }
  ngOnInit(): void {
   // this.myvideos=this._videoservice.getVidoes();
   this._videoservice.getVideos().subscribe(x=>this.myvideos=x);   
    
  }
}
