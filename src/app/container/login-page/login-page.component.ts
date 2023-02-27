import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Login } from 'src/app/model/login';
import { ApiService } from 'src/app/service/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
login() {
throw new Error('Method not implemented.');
}

  LoginForm:FormGroup;
  submitted = false;
  flag = "false";
  @ViewChild('username') username: any; // accessing the reference element
  @ViewChild('password') password: any; // accessing the reference element
  model: any;
  version: any;
  year: any;

  constructor(private authguardService: LoginService,private apiService:ApiService,private globalservice:GlobalService,private spinner: NgxSpinnerService,private formBuilder: FormBuilder,private router:Router) { }

  private buildForm() {
    this.LoginForm = this.formBuilder.group({
      UserName: ['', [Validators.required]],
      Password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    window.sessionStorage.setItem('streamflag', this.flag);
    this.buildForm();
  }

  get f() { return this.LoginForm.controls; }

  OnGetToken() {
    this.submitted = true;
    this.LoginForm.markAllAsTouched();
    if (this.LoginForm.invalid) {
      return;
    }
    if (this.LoginForm.valid) {
      const loginModel = this.LoginForm.value as Login;
      this.spinner.show();
      this.authguardService.UserAuthentication(loginModel).subscribe(resp => {
        console.log(resp)
        if (resp.msg === 'Success') {
          window.sessionStorage.setItem('Username', loginModel.UserName);
          if(resp.data[0].token==null)
          {
            this.spinner.hide();
            this.globalservice.swalError("You Do Not have Access Token !");
          }
          else{
            this.spinner.hide();
            this.globalservice.swalSuccess("Login Success !");
            this.router.navigate(['dashboard']);
            const token = resp.data.token as string;
            window.sessionStorage.setItem('token', token);
            window.sessionStorage.setItem('USERID', resp.data.userId);
            window.sessionStorage.setItem('UserRole', resp.data.roleName);
          }
        }
        else {
          this.globalservice.swalError(resp.msg);
          this.spinner.hide();
        }
      });
    }
  }

  ClearField(){ 
    this.username.nativeElement.value = '';
    this.password.nativeElement.value = '';
  }
  forgotpassword()
  {
    this.globalservice.swalError("Under Development !");
  }

}
