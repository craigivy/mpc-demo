import { Component, OnInit, EventEmitter } from '@angular/core';
import { Solution, SolutionEntry } from '../domain';

import { ApiService } from '../service/api.service';

@Component({
//  selector: 'my-app',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  lat: Number = 41.85;
  lng: Number = -87.65;
  public waypoints: {location: { lat: number, lng: number }, stopover: boolean}[];

  constructor(private api: ApiService) {
  }

  origin: String = 'Saint Lous, MO' ;
  public markerOptions = {
    origin: {
        icon: './assets/truck-40x40.png',
        draggable: false,
    }
};

 public flImagePath = './assets/hurricane-60x60.png';

  public renderOptions = {
    suppressMarkers: true
  };

  destination: { lat: number, lng: number };
  public solution: Solution;
  public allAccountsMarkers: SolutionEntry[];
  public markers: SolutionEntry[];

  public loading = true;

  public screen = Screen.ALL;

  ngOnInit() {
    this.loading = true;
    this.api.getAllAccounts().subscribe(s => {
      if (s != null) {
        console.log('all accounts');
        this.loading = false;
        this.allAccountsMarkers = s.solutionEntries;
      }
      console.log(this.allAccountsMarkers);
    });
  }

  setShowPins() {
    this.loading = true;
    this.screen = Screen.SELECTED;
    this.api.getRequestedAccounts().subscribe(s => {
      if (s != null) {
        console.log('requested accounts');
        this.markers = s.getLatLongArray();
        this.loading = false;
      }
      console.log(this.markers);
    });
  }

  setShowRoute() {
    this.screen = Screen.ROUTE;
    this.loading = true;
    this.api.getSolution().subscribe(s => {
      if (s != null) {
        console.log('solution');
        this.setSolution(s);
        this.loading = false;
      }
      console.log(this.markers);
    });
  }

  setSolution(s: Solution) {
    this.solution = s;
        const temp = s.getWaypoints();
        console.log('waypoints: ' + temp);
        console.log(temp);
        this.markers = s.getLatLongArray();
        console.log('markers: ' + this.markers);
        console.log(this.markers);
        const cut: {location: { lat: number, lng: number }, stopover: boolean}[] = temp.slice(0, temp.length - 2);
        this.waypoints = cut;
        this.destination = temp[ temp.length - 1].location;
  }



  // blackLabel(index: number): {color: string, fontWeight: string, text: string} {
  //   console.log('This might hurt.');
  //   return {color: 'black',
  //     fontWeight: 'bold',
  //   text: index.toString()};
  // }
}

export enum Screen {
  ALL = 1,
  SELECTED,
  ROUTE
}
