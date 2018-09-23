import { Component } from '@angular/core';


@Component({
//  selector: 'my-app',
  templateUrl: './app.result.html',
  styleUrls: ['./app.result.css']
})
export class ResultComponent {

  lat: Number = 41.85;
  lng: Number = -87.65;

  origin = 'Saint Lous, MO';
  destination = 'Orlando, FL';

  waypoints: object = [
    {
        location: 'Plano, TX',
        stopover: true,
    }, {
        location: 'Sunnyvale, CA',
        stopover: true,
    }, {
        location: 'Raleigh, NC',
        stopover: true,
    } ];

//  origin = { lat: 24.799448, lng: 120.979021 };
//  destination = { lat: 24.799524, lng: 120.975017 };
}
