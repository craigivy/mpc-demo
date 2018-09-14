import { Component, ViewEncapsulation } from '@angular/core';

import { Notification, NotificationEvent, NotificationType } from 'patternfly-ng/notification';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  header = 'Default Header.';
  message = 'Default Message.';
  showClose: true;
  type = 'success';
}
