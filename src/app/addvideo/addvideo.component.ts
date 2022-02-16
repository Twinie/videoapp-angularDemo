import { Component, OnInit } from '@angular/core';
import { VideoService } from '../video.service';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';

@Component({
  selector: 'app-addvideo',
  templateUrl: './addvideo.component.html',
  styleUrls: ['./addvideo.component.css']
})
export class AddvideoComponent implements OnInit {
  videoForm!: FormGroup
  submitted=false;
unSaved:boolean=true;
  constructor(private _videoservice:VideoService, private _builder:FormBuilder, private _router:Router) { 
    this.createForm();
  }

  ngOnInit(): void {
  }
  canDeactivate():Observable<boolean> |boolean{
    if(this.unSaved){
      const result = window.confirm('There are unsaved changes!');
      return of(result)
    }
    return true;
  }
createForm(){
  this.videoForm=this._builder.group({
    Title: ['', Validators.required],
    Length: ['', Validators.required],
    Category: ['', Validators.required],
    Format: ['', Validators.required],
  })
}

get videoFormControl(){
  return this.videoForm.controls;
}
addVideoData(body:any){
  this.submitted=true;
if(this.videoForm.valid){
  this._videoservice.addVideos(body).subscribe(()=>{
    alert("video added!");
    this._router.navigate(['/videos']);
  })
}
}
}

