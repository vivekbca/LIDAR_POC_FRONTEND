import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiResponse } from '../model/api-response';
import { GlobalService } from './global.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  ApiUrl = '';


  constructor(private httpclient: HttpClient,
    private globalService: GlobalService,
    private router: Router) { this.ApiUrl = globalService.getApiUrl();}

    getAllcases(searchObj: any): Observable<ApiResponse> {
      var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json', 'No-Auth': 'True' });
      return this.httpclient.post<ApiResponse>(this.ApiUrl + 'case/getAllcases', searchObj, { headers: reqHeader });
    }
    getAllModels(source_name:any): Observable<ApiResponse> {
      var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json', 'No-Auth': 'True' });
      return this.httpclient.get<ApiResponse>(this.ApiUrl + 'all/models/' + source_name, { headers: reqHeader });
    }
    getAllmoasdels(): Observable<ApiResponse> {
      var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json', 'No-Auth': 'True' });
      return this.httpclient.get<ApiResponse>(this.ApiUrl + 'model/getAllmodels', { headers: reqHeader });
    }

    
}


