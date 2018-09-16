import { Component, ViewEncapsulation } from '@angular/core';

import { Notification, NotificationEvent, NotificationType } from 'patternfly-ng/notification';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My first AGM project';
  lat = 39.0921017;
  lng = -94.71580062;

markers: {lat: number, lng: number, label: string}[] = [
  { lat: 37.5592563, lng: -122.2785536, label: 'Visa' },
  { lat: 42.1567664, lng: -87.8922984, label: 'Discover' },
  { lat: 33.6585169, lng: -84.4261124, label: 'Delta'},
  { lat: 40.7206599, lng: -74.0134065, label: 'Citi'},
  { lat: 43.6465201, lng: -79.3822483, label: 'RBC' },
  { lat: 19.4357552, lng: -99.1815213, label: 'Pemex' }

];

}
