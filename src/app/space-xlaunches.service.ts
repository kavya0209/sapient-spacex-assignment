import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable , Subject } from 'rxjs';
import { HttpParams } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class SpaceXlaunchesService {

  public selectedYear;
  destroy$ = new Subject();
  private _url:string ="https://api.spacexdata.com/v3/launches?limit=100";
 
  constructor(private http: HttpClient) { }
 
  getLaunches():Observable<Object> {
  
     return this.http.get(this._url);
    
  }

  getLaunchYear(selectedYear) : Observable<Object>  {
    console.log(selectedYear);
    let params = new HttpParams();
    params = params.append('launch_year', selectedYear);
    console.log(params);
   return this.http.get(this._url, {params: params});
  }
  
}
