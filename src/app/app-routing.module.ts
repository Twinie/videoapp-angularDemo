import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddvideoComponent } from './addvideo/addvideo.component';
import { BasicComponent } from './basic/basic.component';
import { HomeComponent } from './home/home.component';
import { VideodetailComponent } from './videodetail/videodetail.component';
import { VideolistComponent } from './videolist/videolist.component';
import { VideoGuardService } from './video.guard.service';
import { CanDeactivateGuardService } from './can-deactivate-guard.service';

const routes: Routes = [
  {path:'basic', component:BasicComponent},
  {path:'home', component:HomeComponent},
  {path:'videos', component:VideolistComponent},
  {path:'video/:id', canActivate:[VideoGuardService],component:VideodetailComponent},
  {path:'addvideo', canDeactivate:[CanDeactivateGuardService],component:AddvideoComponent},
  {path:'', redirectTo: 'home',pathMatch:'full'},
  {path:'**',redirectTo:'home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
