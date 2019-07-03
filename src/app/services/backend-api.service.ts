import { Injectable } from '@angular/core';
import { ICallBackAPI } from '../model/ICallBackAPI';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendApiService {

  public chartFirstFile:boolean;

  constructor(private http: HttpClient) {
    this.chartFirstFile=true;
   }
   

  public getChartData(callback: ICallBackAPI, ctx:any) {
    console.log("in getChartData");

    if ( this.chartFirstFile ){
      this.chartFirstFile=false;
    return this.getHttpGetdata(callback, '/assets/json/chart1.json', ctx);
    }
    else{
      this.chartFirstFile=true;
      return this.getHttpGetdata(callback, '/assets/json/chart2.json', ctx);
    }

  }

  public getHttpGetdata(callback: ICallBackAPI, urlInfo: string, ctx:any) {
    console.log("in gethttp");
    this.http.get(this.getEndPointUrl() + urlInfo)  //{withCrenditals: true }
      .subscribe(data => {
        callback(null, data, ctx);
      },
        error => {
          console.error('Error while getting data from server');
        });

  }

  public getEndPointUrl() {
    return "http://localhost:4200"
  }
}
