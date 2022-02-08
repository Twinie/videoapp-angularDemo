import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BasicComponent } from './basic/basic.component';
import { HomeComponent } from './home/home.component';
import { VideolistComponent } from './videolist/videolist.component';
import { VideoService } from './video.service';
import { HttpClientModule } from '@angular/common/http';
import { AddvideoComponent } from './addvideo/addvideo.component';
import { VideodetailComponent } from './videodetail/videodetail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VideoFilterPipe } from './video-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,
    HomeComponent,
    VideolistComponent,
    AddvideoComponent,
    VideodetailComponent,
    VideoFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
