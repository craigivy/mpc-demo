import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Notification, NotificationEvent, NotificationType } from 'patternfly-ng/notification';
import { Solution } from '../domain/';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ApiService } from '../service/api.service';
import {Router} from '@angular/router';

@Component({
//  selector: 'vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})

export class VoteComponent implements OnInit {
  lat = 39.0921017;
  lng = -94.71580062;
  public elections;
  public loading = true;
  public wasSubmitted = false;

  constructor(private api: ApiService, private http: HttpClient, private router: Router) {
  }

ngOnInit() {
  this.loading = true;
  this.api.getAccounts().subscribe(s => {
    if (s != null) {
      this.elections = s.getElections();
      this.loading = false;
    }
  });
}

onSubmit(form: any): void {
    console.log('vote :', form.election);
    this.api.vote(form.election);
    this.wasSubmitted = true;
  }
}
