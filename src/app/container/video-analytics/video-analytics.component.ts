
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ApiService } from 'src/app/service/api.service';
import { GlobalService } from 'src/app/service/global.service';

declare const openNav:any;

@Component({
  selector: 'app-video-analytics',
  templateUrl: './video-analytics.component.html',
  styleUrls: ['./video-analytics.component.css']
})
export class VideoAnalyticsComponent implements OnInit {

  submitted: boolean = false;
  LidarForm:FormGroup;

  constructor(private apiService: ApiService, private globalservice: GlobalService, private spinner: NgxSpinnerService, private formBuilder: FormBuilder, private router: Router, private http: HttpClient) { }

  private buildForm() {
    this.LidarForm = this.formBuilder.group({
      modelid: ['', [Validators.required]],
      camid:['', [Validators.required]],
      userid: ['', [Validators.required]]
    });
  }

  ngOnInit() {
    this.buildForm();
    new openNav();
  }
  get f() { return this.LidarForm.controls; }
  RunModel()
  {
    this.submitted = true;
    this.LidarForm.markAllAsTouched();
    if (this.LidarForm.invalid) {
      return;
    }
    if (this.LidarForm.valid) {
    }
  }

}
