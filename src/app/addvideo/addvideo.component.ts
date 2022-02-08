import { Component, OnInit } from '@angular/core';
import { VideoService } from '../video.service';
import { FormGroup,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-addvideo',
  templateUrl: './addvideo.component.html',
  styleUrls: ['./addvideo.component.css']
})
export class AddvideoComponent implements OnInit {
  videoForm!: FormGroup

  constructor(private _videoservice:VideoService, private _builder:FormBuilder) { 
    this.createForm();
  }

  ngOnInit(): void {
  }
createForm(){
  this.videoForm=this._builder.group({
    Title: '',
    Length: '',
    Category: '',
    Format: '',
  })
}
addVideoData(body:any){
this._videoservice.addVideos(body).subscribe(()=>alert("video added!"))
}
}
