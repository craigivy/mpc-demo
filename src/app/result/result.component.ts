import { Component, OnInit } from '@angular/core';
import { Solution, SolutionEntry } from '../domain';
import { Subject, Observable, of, merge } from 'rxjs';
import { ApiService } from '../service/api.service';


@Component({
  //  selector: 'my-app',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  lat: Number = 34.7714347;
  lng: Number = -98.317331;
  public waypoints: {
    location: { lat: number; lng: number };
    stopover: boolean;
  }[];

  constructor(private api: ApiService) {}

  public flImagePath = './assets/hurricane-60x60.png';
  public bluePin = './assets/blue-dot-40x40.png';
  public truckLocation = './assets/truck-40x40.png';
  origin: String = 'Saint Lous, MO';
  public markerOptions = {
    origin: {
      icon: this.truckLocation,
      draggable: false
    }
  };

  public renderOptions = {
    suppressMarkers: true
  };

  destination: { lat: number; lng: number };
  public solution: Solution;
  public allAccountsMarkers: SolutionEntry[];
  public markers: SolutionEntry[];

  public loading = true;
  public calculatedResults = false;
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
      setTimeout(() => this.resultsAreReady(), 31000);
    });
  }

  resultsAreReady() {
    console.log('timer hit!');
    this.calculatedResults = true;
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
    const cut: {
      location: { lat: number; lng: number };
      stopover: boolean;
    }[] = temp.slice(0, temp.length - 1);
    this.waypoints = cut;
    this.destination = temp[temp.length - 1].location;
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
