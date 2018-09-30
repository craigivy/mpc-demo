import { Component, ViewEncapsulation, OnInit } from '@angular/core';

import { Notification, NotificationEvent, NotificationType } from 'patternfly-ng/notification';
import { Solution } from '../domain/';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { ApiService } from '../service/api.service';

@Component({
//  selector: 'vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})

export class VoteComponent implements OnInit {
  title = 'My first AGM project';
  lat = 39.0921017;
  lng = -94.71580062;
  public elections;

  constructor(private api: ApiService, private http: HttpClient) {
  }

ngOnInit() {
  const obs = this.http.get('http://httpbin.org/get');
  obs.subscribe((response) => console.log(response));
  const s = this.api.getAccounts();
  this.elections = s.getElections();
  console.log(this.elections);
}

vote(electionForm) {
  console.log(electionForm.value.election);
  // const url = 'http://httpbin.org/post';
  // const data = new FormData();
  // data.append('accoundId', '104');
  const url = 'http://mpc-demo-mpc-demo.129.146.147.59.xip.io/api/solver/userinput';
  const body = new HttpParams()
    .set('accountId', '104');
  const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    .set('Accept', '*/*');
  const obs = this.http.post(url, body.toString(), {headers});
  obs.subscribe((response) => console.log(response));
}

}
