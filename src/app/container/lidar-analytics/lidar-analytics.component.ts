
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ApiService } from 'src/app/service/api.service';
import { GlobalService } from 'src/app/service/global.service';
declare const openNav:any;

@Component({
  selector: 'app-lidar-analytics',
  templateUrl: './lidar-analytics.component.html',
  styleUrls: ['./lidar-analytics.component.css']
})
export class LidarAnalyticsComponent implements OnInit {

  submitted: boolean = false;
  LidarForm:FormGroup;
  source_name:any;
  all_models:any;
  usecase:any='';
  camera:any='';
  url:any;
  streamingpanel1:boolean=false;
  streamingpanel2:boolean=false;
  constructor(private sanitizer: DomSanitizer,private apiService: ApiService, private globalservice: GlobalService, private spinner: NgxSpinnerService, private formBuilder: FormBuilder, private router: Router, private http: HttpClient) { }

  private buildForm() {
    this.LidarForm = this.formBuilder.group({
      modelid: ['', [Validators.required]],
      camid:['', [Validators.required]],
      userid: ['', [Validators.required]]
    });
  }

  ngOnInit() {
    this.source_name = sessionStorage.getItem('SOURCE_NAME')
    this.spinner.show();
    this.apiService.getAllModels(this.source_name).subscribe(resp => {
      this.globalservice.showMessage(resp.msg, resp.result);
        if (resp.msg === 'Success') {
          new openNav();
          this.all_models = resp.data;
          this.spinner.hide();
        }
        else {
          this.all_models = resp.data
          this.spinner.hide();
        }
    });
    this.buildForm();
  }
  get f() { return this.LidarForm.controls; }

  RunModel()
  {
    console.log(this.usecase)
    if(this.usecase==null || this.usecase=='')
    {
      this.globalservice.swalError("Select Use Case !");
      return;
    }
    else if(this.camera==null || this.camera=='')
    {
      this.globalservice.swalError("Select Camera !")
      return;
    }
    else{
      if(this.usecase=="Helmet Detection")
      {
        this.streamingpanel1=true;
        this.streamingpanel2=false;
      }
      else{
        this.streamingpanel1=false;
        this.streamingpanel2=true;
      }
      
      // this.url='http://192.168.1.13:6969/infer';
      // this.url=this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
    }
  }

}
