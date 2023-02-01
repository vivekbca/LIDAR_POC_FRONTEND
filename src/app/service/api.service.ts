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
    getAllcasesforsw(searchObj: any): Observable<ApiResponse> {
      var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json', 'No-Auth': 'True' });
      return this.httpclient.post<ApiResponse>(this.ApiUrl + 'case/getAllcasesforsw', searchObj, { headers: reqHeader });
    }
    getAllcasesWoforsw(searchObj: any): Observable<ApiResponse> {
      var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json', 'No-Auth': 'True' });
      return this.httpclient.post<ApiResponse>(this.ApiUrl + 'case/getAllWocasesforsw', searchObj, { headers: reqHeader });
    }
    getAllsites(userId:any): Observable<ApiResponse> {
      var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json', 'No-Auth': 'True' });
      return this.httpclient.get<ApiResponse>(this.ApiUrl + 'site/getAllsites/' + userId, { headers: reqHeader });
    }
    getAllmodels(): Observable<ApiResponse> {
      var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json', 'No-Auth': 'True' });
      return this.httpclient.get<ApiResponse>(this.ApiUrl + 'model/getAllmodels', { headers: reqHeader });
    }

    getAllsw(site_id:any): Observable<ApiResponse> {
      var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json', 'No-Auth': 'True' });
      return this.httpclient.get<ApiResponse>(this.ApiUrl + 'site/getAllsw/'+site_id, { headers: reqHeader });
    }

    createCase(CreateObject: any): Observable<ApiResponse> {
      var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json', 'No-Auth': 'True' });
      return this.httpclient.post<ApiResponse>(this.ApiUrl + 'case/createcases', CreateObject, { headers: reqHeader });
    }
    createReasigncases(CreateObject: any): Observable<ApiResponse> {
      var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json', 'No-Auth': 'True' });
      return this.httpclient.post<ApiResponse>(this.ApiUrl + 'case/createReasigncases', CreateObject, { headers: reqHeader });
    }
    getAllCreatedcases(searchObj: any): Observable<ApiResponse> {
      var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json', 'No-Auth': 'True' });
      return this.httpclient.post<ApiResponse>(this.ApiUrl + 'case/getAllCreatedcases', searchObj, { headers: reqHeader });
    }
    getNewcaseCount(userId :any): Observable<ApiResponse> {
      var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json', 'No-Auth': 'True' });
      return this.httpclient.get<ApiResponse>(this.ApiUrl + 'case/getNewCasesCount/' + userId, { headers: reqHeader });
  }
  getWOcaseCount(userId :any): Observable<ApiResponse> {
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json', 'No-Auth': 'True' });
    return this.httpclient.get<ApiResponse>(this.ApiUrl + 'case/getWoCasesCount/' + userId, { headers: reqHeader });
}
getAllCreatedCasesbyStatus(obj:any):Observable<ApiResponse> {
  var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json', 'No-Auth': 'True' });
  return this.httpclient.post<ApiResponse>(this.ApiUrl + 'case/getAllCreatedCasesbyStatus' , obj, { headers: reqHeader });
}
getAllWoCasesbyStatus(obj:any):Observable<ApiResponse> {
  var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json', 'No-Auth': 'True' });
  return this.httpclient.post<ApiResponse>(this.ApiUrl + 'case/getAllWoCasesbyStatus' , obj, { headers: reqHeader });
}
getAllstatus():Observable<ApiResponse> {
  var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json', 'No-Auth': 'True' });
  return this.httpclient.get<ApiResponse>(this.ApiUrl + 'status/getAllstatus',  { headers: reqHeader });{
  }
  }
  getNewcaseCountforsw(userId :any): Observable<ApiResponse> {
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json', 'No-Auth': 'True' });
    return this.httpclient.get<ApiResponse>(this.ApiUrl + 'case/getNewCasesCountForsw/' + userId, { headers: reqHeader });
} 
getWOcaseCountforsw(userId :any): Observable<ApiResponse> {
  var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json', 'No-Auth': 'True' });
  return this.httpclient.get<ApiResponse>(this.ApiUrl + 'case/getWoCasesCountForsw/' + userId, { headers: reqHeader });
}
Casechange(Dataarray:any):Observable<ApiResponse> {
  var reqHeader = new HttpHeaders({'enctype': 'multipart/form-data','Accept': 'application/json'})
  return this.httpclient.post<ApiResponse>(this.ApiUrl + 'case/StatusChangeforSw' , Dataarray);
}
CasechangeRe(Dataarray:any):Observable<ApiResponse> {
  var reqHeader = new HttpHeaders({'enctype': 'multipart/form-data','Accept': 'application/json'})
  return this.httpclient.post<ApiResponse>(this.ApiUrl + 'case/reassignStatusChangeforSw' , Dataarray);
}
getAlllta(): Observable<ApiResponse> {
  var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json', 'No-Auth': 'True' });
  return this.httpclient.get<ApiResponse>(this.ApiUrl + 'site/getAlllta/' , { headers: reqHeader });
}
getAllFiles(case_id :any): Observable<ApiResponse> {
  var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json', 'No-Auth': 'True' });
  return this.httpclient.get<ApiResponse>(this.ApiUrl + 'FileHandling/getAllFiles/' + case_id, { headers: reqHeader });
}
downloadfile(filename:any) {
  var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json', 'No-Auth': 'True' });
  return this.httpclient.get(this.ApiUrl + 'FileHandling/downloadfile/' + filename,  {observe:'response',responseType:'blob'});
}
downloadfileIV(filename:any) {
  var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json', 'No-Auth': 'True' });
  return this.httpclient.get(this.ApiUrl + 'FileHandling/downloadimage_video/' + filename,  {observe:'response',responseType:'blob'});
}
getNewCasesCountForlta(userId :any): Observable<ApiResponse> {
  var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json', 'No-Auth': 'True' });
  return this.httpclient.get<ApiResponse>(this.ApiUrl + 'case/getNewCasesCountForlta/' + userId, { headers: reqHeader });
}
getWoCasesCountForlta(userId :any): Observable<ApiResponse> {
  var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json', 'No-Auth': 'True' });
  return this.httpclient.get<ApiResponse>(this.ApiUrl + 'case/getWoCasesCountForlta/' + userId, { headers: reqHeader });
}
getAllcasesforlta(searchObj: any): Observable<ApiResponse> {
  var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json', 'No-Auth': 'True' });
  return this.httpclient.post<ApiResponse>(this.ApiUrl + 'case/getAllcasesforlta', searchObj, { headers: reqHeader });
}
getAllWocasesforlta(searchObj: any): Observable<ApiResponse> {
  var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json', 'No-Auth': 'True' });
  return this.httpclient.post<ApiResponse>(this.ApiUrl + 'case/getAllWocasesforlta', searchObj, { headers: reqHeader });
}
StatusChangeforlta(Dataarray:any):Observable<ApiResponse> {
  var reqHeader = new HttpHeaders({'enctype': 'multipart/form-data','Accept': 'application/json'})
  return this.httpclient.post<ApiResponse>(this.ApiUrl + 'case/StatusChangeforlta' , Dataarray);
}
getAllWoCasesbyStatuslta(obj:any):Observable<ApiResponse> {
  var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json', 'No-Auth': 'True' });
  return this.httpclient.post<ApiResponse>(this.ApiUrl + 'case/getAllWoCasesbyStatuslta' , obj, { headers: reqHeader });
}
getOnloadAllcases(userid:any): Observable<ApiResponse> {
  var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json', 'No-Auth': 'True' });
  return this.httpclient.get<ApiResponse>(this.ApiUrl + 'case/onLoadgetAllcases/'+userid, { headers: reqHeader });
}
onLoadgetAllcasesforlta(userid:any): Observable<ApiResponse> {
  var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json', 'No-Auth': 'True' });
  return this.httpclient.get<ApiResponse>(this.ApiUrl + 'case/onLoadgetAllcasesforlta/'+userid, { headers: reqHeader });
}
onLoadgetAllWocasesforlta(userid:any): Observable<ApiResponse> {
  var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json', 'No-Auth': 'True' });
  return this.httpclient.get<ApiResponse>(this.ApiUrl + 'case/onLoadgetAllWocasesforlta/'+userid, { headers: reqHeader });
}
getOnloadAllCreatedcases(userid:any): Observable<ApiResponse> {
  var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json', 'No-Auth': 'True' });
  return this.httpclient.get<ApiResponse>(this.ApiUrl + 'case/onLoadgetAllCreatedcases/'+userid, { headers: reqHeader });
}
OnLoadgetAllcasesforsw(userid:any): Observable<ApiResponse> {
  var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json', 'No-Auth': 'True' });
  return this.httpclient.get<ApiResponse>(this.ApiUrl + 'case/OnLoadgetAllcasesforsw/'+userid, { headers: reqHeader });
}
onLoadgetAllWocasesforsw(userid:any): Observable<ApiResponse> {
  var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json', 'No-Auth': 'True' });
  return this.httpclient.get<ApiResponse>(this.ApiUrl + 'case/onLoadgetAllWocasesforsw/'+userid, { headers: reqHeader });
}
getDataOndateAllcases(obj:any):Observable<ApiResponse> {
  var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json', 'No-Auth': 'True' });
  return this.httpclient.post<ApiResponse>(this.ApiUrl + 'case/onDateFiltergetAllcases' , obj, { headers: reqHeader });
}
getDataOndateAllcasesbyrange(obj:any):Observable<ApiResponse> {
  var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json', 'No-Auth': 'True' });
  return this.httpclient.post<ApiResponse>(this.ApiUrl + 'case/getAllCreatedcasesBydateRannge' , obj, { headers: reqHeader });
}
getAllcasesforswByDateRange(obj:any):Observable<ApiResponse> {
  var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json', 'No-Auth': 'True' });
  return this.httpclient.post<ApiResponse>(this.ApiUrl + 'case/getAllcasesforswByDateRange' , obj, { headers: reqHeader });
}
getAllWocasesforswByDateRange(obj:any):Observable<ApiResponse> {
  var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json', 'No-Auth': 'True' });
  return this.httpclient.post<ApiResponse>(this.ApiUrl + 'case/getAllWocasesforswByDateRange' , obj, { headers: reqHeader });
}
getAllcasesforltaBydateRange(obj:any):Observable<ApiResponse> {
  var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json', 'No-Auth': 'True' });
  return this.httpclient.post<ApiResponse>(this.ApiUrl + 'case/getAllcasesforltaBydateRange' , obj, { headers: reqHeader });
}
getAllWocasesforltaByDateRange(obj:any):Observable<ApiResponse> {
  var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json', 'No-Auth': 'True' });
  return this.httpclient.post<ApiResponse>(this.ApiUrl + 'case/getAllWocasesforltaByDateRange' , obj, { headers: reqHeader });
}
getAllRejectedCases(userid:any): Observable<ApiResponse> {
  var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json', 'No-Auth': 'True' });
  return this.httpclient.get<ApiResponse>(this.ApiUrl + 'case/ViewRejectedcase/'+userid, { headers: reqHeader });
}
getAllRejectedCasesSW(userid:any): Observable<ApiResponse> {
  var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json', 'No-Auth': 'True' });
  return this.httpclient.get<ApiResponse>(this.ApiUrl + 'case/ViewRejectedcasesw/'+userid, { headers: reqHeader });
}
getAllRejectedCasesCC(userid:any): Observable<ApiResponse> {
  var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json', 'No-Auth': 'True' });
  return this.httpclient.get<ApiResponse>(this.ApiUrl + 'case/ViewRejectedcasecc/'+userid, { headers: reqHeader });
}
}


