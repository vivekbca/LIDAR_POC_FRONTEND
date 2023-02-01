import { Component, OnInit } from '@angular/core';

declare const openNav:any;

@Component({
  selector: 'app-video-analytics',
  templateUrl: './video-analytics.component.html',
  styleUrls: ['./video-analytics.component.css']
})
export class VideoAnalyticsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    new openNav();
  }

}
