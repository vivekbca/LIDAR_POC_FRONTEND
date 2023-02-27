import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiResponse } from '../model/api-response';
import { Login } from '../model/login';
import { GlobalService } from './global.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  ApiUrl = '';

  constructor(private httpclient: HttpClient,
    private globalService: GlobalService,
    private router: Router) { this.ApiUrl = globalService.getApiUrl();}

    getToken() {
      return !!window.sessionStorage.getItem("userToken");
    }
    UserAuthentication(loginModel: Login): Observable<ApiResponse> {
      var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json', 'No-Auth': 'True' });
      return this.httpclient.post<ApiResponse>(this.ApiUrl + 'user/login', loginModel, { headers: reqHeader });
    }
    Logout() {
      window.sessionStorage.removeItem('userToken');
      window.sessionStorage.removeItem('userAccDesc');
      window.sessionStorage.removeItem('userFullNm');
      window.sessionStorage.removeItem('userMenu');
      window.sessionStorage.removeItem('menuCollapsed');
  
      window.location.href = window.location.origin + '/login';
      this.globalService.showMessage("You are logged out successfully", "Success");
    }
    getUsrToken() {
      return window.sessionStorage.getItem("userToken");
    }
    geUsrAccDesc() {
      return window.sessionStorage.getItem("userAccDesc");
    }
    getUsrFullNm() {
      return window.sessionStorage.getItem("userFullNm");
    }
  
    GetLoggedInUserData(): Observable<ApiResponse> {
      return this.httpclient.get<ApiResponse>(this.ApiUrl + 'userLogin/UserLoginCheck');
    }
  
    forgotPassword(forgotPassComObj: any) {
      return this.httpclient.post<ApiResponse>(this.ApiUrl + 'forgotPassword/guestForgotPassword', forgotPassComObj);
    }
    resetPassword(resetPasswordObj: any) {
      return this.httpclient.post<ApiResponse>(this.ApiUrl + 'forgotPassword/resetPassword', resetPasswordObj);
    }
}
