import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(public router: Router,private apiService:ApiService){}

  canActivate():boolean{
    if(this.loggedIn()){
      return true
    }else{
      this.router.navigate(['login-page'])
      return false
    }
  }
  loggedIn(){
    return sessionStorage.getItem('token')
   
  }
}
