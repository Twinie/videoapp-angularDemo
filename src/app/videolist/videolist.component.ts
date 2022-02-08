import { Component, OnInit } from '@angular/core';
import { IVideo } from '../Ivideo';
import { VideoService } from '../video.service';

@Component({
  selector: 'app-videolist',
  templateUrl: './videolist.component.html',
  styleUrls: ['./videolist.component.css'],
  // providers: [VideoService]
})
export class VideolistComponent implements OnInit {

  
myvideos:IVideo[] =[];
errormessage:any;
constructor(private _videoservice:VideoService) {
    
}

  ngOnInit(): void {
    // this.myvideos=this._videoservice.getVideos();
    this._videoservice.getVideos().subscribe(x=> this.myvideos=x);
  }

}
