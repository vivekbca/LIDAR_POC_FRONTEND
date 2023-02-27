import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/service/global.service';
import * as $ from 'jquery'
import { ApiService } from 'src/app/service/api.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { FormBuilder } from '@angular/forms';

declare const openNav:any;

declare const StopWebSocket:any;

@Component({
  selector: 'app-navsidemenu',
  templateUrl: './navsidemenu.component.html',
  styleUrls: ['./navsidemenu.component.css']
})
export class NavsidemenuComponent implements OnInit {

  Username:any;
  userId:any;
  UserRole:any;

  constructor(private apiService:ApiService,private globalservice:GlobalService,private spinner: NgxSpinnerService,private formBuilder: FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.Username = sessionStorage.getItem('Username')
    this.userId = sessionStorage.getItem('USERID')
    this.UserRole = sessionStorage.getItem('UserRole')

    // $('.btn').click(function(){
    //   $(this).toggleClass("click");
    //   $('.sidebar').toggleClass("show");
    // });
    //   $('.feat-btn').click(function(){
    //     $('nav ul .feat-show').toggleClass("show");
    //     $('nav ul .first').toggleClass("rotate");
    //   });
    //   $('.serv-btn').click(function(){
    //     $('nav ul .serv-show').toggleClass("show1");
    //     $('nav ul .second').toggleClass("rotate");
    //   });
    //   $('nav ul li').click(function(){
    //     $(this).addClass("active").siblings().removeClass("active");
    //   });
     
  }


  logout()
  {
    sessionStorage.clear();
    this.globalservice.swalSuccess("Logged Out Successful !")
    this.router.navigate(['login-page']);
  }

  lidarAnalytics()
  {
    window.sessionStorage.setItem('SOURCE_NAME', "lidar_analytics");
    this.router.navigate(['lidar-analytics']);
  }
  videoAnalytics()
  {
    window.sessionStorage.setItem('SOURCE_NAME', "video_analytics");
    this.router.navigate(['video-analytics']);
  }
  dashboard()
  {
    this.router.navigate(['dashboard']);
  }
  intrusionDetection()
  {
    this.router.navigate(['intrusion-detection']);
  }
  


}
