import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  action: boolean = true;
  setAutoHide: boolean = true;
  autoHide: number = 5000;
  ApiUrl: any;
  addExtraClass: boolean = false;

  WsUrl: any;

  constructor(private http: HttpClient) {}

  getApiUrl() {
      let ApiUrl = 'https://localhost:44375/api/'
    // let ApiUrl = 'https://anpr.echoltech.com/online/api/';
    // let ApiUrl = 'http://192.168.18.18/online/api/';
    // let ApiUrl = 'http://anpr.com:8002/api/';
    //let ApiUrl = '/online/api/';
    // let ApiUrl = 'http://10.8.252.50:3002/api/';
    return ApiUrl;
  }

  getWsUrl() {
    //  let WsUrl = 'ws://localhost:2000/';
    //let WsUrl = 'wss://anpr.echoltech.com/rtsp-relay/';
    this.ApiUrl = this.getApiUrl();
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'No-Auth': 'True',
    });
    this.http
      .get(this.ApiUrl + 'SystemConfiguration/WebsocketUrl', {
        headers: reqHeader,
      })
      .subscribe((response: any) => {
        console.log(response);
        this.WsUrl = response.data;
      });
    return this.WsUrl;
  }

  showMessage(message: string, actionButtonLabel: string) {
    //let config = new MatSnackBarConfig();
    //config.verticalPosition = this.verticalPosition;
    //config.horizontalPosition = this.horizontalPosition;
    //config.duration = this.setAutoHide ? this.autoHide : 0;
    //let backColorCssclass: string;
    //if (actionButtonLabel.indexOf('Success') > -1)
    //  backColorCssclass = 'green-snackbar';
    //else if (actionButtonLabel.indexOf('Info') > -1)
    //  backColorCssclass = 'yellow-snackbar';
    //else if (actionButtonLabel.indexOf('Error') > -1 || actionButtonLabel.indexOf('ModelErr') > -1)
    //  backColorCssclass = 'red-snackbar';
    //config.panelClass = backColorCssclass;
    //this.snackBar.open(message, this.action ? actionButtonLabel : undefined, config);
  }
  getPageSizeList() {
    let pageSizes = [5, 10, 15];
    return pageSizes;
  }

  getSearchQueryString(obj: any): string {
    const qs = Object.keys(obj)
      .map((key) => `${key}=${obj[key]}`)
      .join('&');
    return `?${qs}`;
  }
  public swalError(arg: any) {
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: arg,
      showConfirmButton: true,
    });
  }

  public swalSuccess(arg: any) {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: arg,
      showConfirmButton: true,
    });
  }
}
