import { Component, ViewEncapsulation } from '@angular/core';

import { Notification, NotificationEvent, NotificationType } from 'patternfly-ng/notification';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My first AGM project';
  lat = 51.678418;
  lng = 7.809007;
}
