import { Component, OnInit, EventEmitter } from '@angular/core';

import { Solution } from '../domain';

import { ApiService } from '../service/api.service';

@Component({
//  selector: 'my-app',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  lat: Number = 41.85;
  lng: Number = -87.65;
  public waypoints: {location: String, stopover: boolean}[];

  constructor(private api: ApiService) {
  }

  origin: String = 'Saint Lous, MO';
  destination: String;
  public solution: Solution;
  public markers;
  public showRoute = false;
  public loading = true;

  stateChanged: EventEmitter<boolean> = new EventEmitter();

  ngOnInit() {


    this.api.getSolution().subscribe(s => {
      if (s != null) {
        console.log('hello');
        this.solution = s;
        this.markers = s.getLatLongArray();
        const temp = s.getWaypoints();
        const cut: {location: String, stopover: boolean}[] = temp.slice(0, temp.length - 1);
        this.waypoints = cut;
        this.destination = temp[ temp.length - 1].location;
        this.loading = false;
      }
    });
  }

  setShowRoute() {
    this.showRoute = true;
  }

  setShowPins() {
    this.showRoute = false;
  }
}
