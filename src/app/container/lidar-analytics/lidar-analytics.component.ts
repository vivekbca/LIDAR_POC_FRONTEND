import { Component, OnInit } from '@angular/core';
declare const openNav:any;

@Component({
  selector: 'app-lidar-analytics',
  templateUrl: './lidar-analytics.component.html',
  styleUrls: ['./lidar-analytics.component.css']
})
export class LidarAnalyticsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    new openNav();
  }

}
