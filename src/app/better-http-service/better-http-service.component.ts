import { Component, OnInit } from '@angular/core';

import { Driver } from '../driver';
import { F1BetterService } from '../f1-simple-service';

@Component({
  selector: 'app-better-http-service',
  templateUrl: './better-http-service.component.html',
  styleUrls: ['./better-http-service.component.css'],
  providers: [F1BetterService]
})
export class BetterHttpServiceComponent  {

  public drivers: Driver[];

  constructor(private service: F1BetterService) {
    service.getDrivers().subscribe(drivers => this.drivers = drivers);
    }



}
