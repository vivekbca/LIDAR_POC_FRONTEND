import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './container/dashboard/dashboard.component';
import { LidarAnalyticsComponent } from './container/lidar-analytics/lidar-analytics.component';
import { LoginPageComponent } from './container/login-page/login-page.component';
import { VideoAnalyticsComponent } from './container/video-analytics/video-analytics.component';

import { AuthGuard } from './service/auth.guard';

const routes: Routes = [
  {
    path:'',
    redirectTo:'login-page',
    pathMatch:'full'
    },
    {path:'login-page',component:LoginPageComponent},
    {path:'dashboard',component:DashboardComponent},
    {path:'lidar-analytics',component:LidarAnalyticsComponent},
    {path:'video-analytics',component:VideoAnalyticsComponent},


    


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
