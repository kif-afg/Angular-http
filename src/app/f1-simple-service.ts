import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { Driver } from './driver';


@Injectable()
export class F1SimpleService {

  constructor(private http: Http) { }

  public getDrivers(): Observable<Response> {
    return this.http.get(`http://ergast.com/api/f1/2017/drivers.json`);
  }
}

@Injectable()
export class F1BetterService {

  private request$: Observable<Driver[]>;
 
  constructor(http: Http) {
    this.request$ = http.get(`http://ergast.com/api/f1/2017/drivers.json`)
        .map(response => response.json().MRData.DriverTable.Drivers)
  }

  public getDrivers(): Observable<Driver[]> {
    return this.request$;
  }

 

}