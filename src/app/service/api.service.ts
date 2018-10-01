import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of, merge } from 'rxjs';
import { mapTo, delay } from 'rxjs/operators';
import { Solution } from '../domain';

@Injectable()
export class ApiService {

  private base = 'http://mpc-demo-mpc-demo.129.146.154.34.xip.io/api/solver/';
  private voteUrl = this.base + 'userinput';
  private accountsUrl = this.base + 'defaultaccounts';
  private logCache = this.base + 'printcache';
  private solutionUrl = this.base + 'solution';

  constructor(private http: HttpClient) {
  }

  public getSolution(): Observable<Solution> {
    const c: Observable<Solution> = of(null);
    return merge(c.pipe(
      mapTo(this.hardCoded()),
      delay(2000)
    ));
  }

  public getAccounts(): Solution {

    // const obs = this.http.get(this.accountsUrl);
    // s = new Solution().deserializeAccounts(response);
    return (this.hardCodedWithID());
  }

  public vote(accountId) {
    console.log('vote=' + accountId);
    const body = new HttpParams()
      .set('accountId', accountId);
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
      .set('Accept', '*/*');
    const obs = this.http.post(this.voteUrl, body.toString(), {headers});
    obs.subscribe(
      // (val) => { console.log('api vote val', val); },
      // (response) => { console.log('api vote response', response); },
      // () => { console.log('api vote complete'); }
    );
    console.log(this.logCache, 'will log the cache');
  }


  private hardCoded(): Solution {
    return new Solution().deserialize({
      'solutionName' : 'MPC Demo',
      'solutionEntries' : [ {
        'venueName' : 'C8',
        'cityName' : 'New York, New York',
        'latitude' : 40.7128,
        'longitude' : -74.006,
        'revenueOpportunity' : 2200000,
        'date' : '2018-10-16'
      }, {
        'venueName' : 'E3',
        'cityName' : 'Dallas, Texas',
        'latitude' : 32.7767,
        'longitude' : -96.797,
        'revenueOpportunity' : 2400000,
        'date' : '2018-10-17'
      }, {
        'venueName' : 'V2',
        'cityName' : 'Foster City, California',
        'latitude' : 37.5585,
        'longitude' : -122.2711,
        'revenueOpportunity' : 13000000,
        'date' : '2018-10-18'
      }, {
        'venueName' : 'P4',
        'cityName' : 'Mexico City, Mexico',
        'latitude' : 19.4326,
        'longitude' : -99.1332,
        'revenueOpportunity' : 2000000,
        'date' : '2018-10-22'
      }, {
        'venueName' : 'M6',
        'cityName' : 'Rochester, New York',
        'latitude' : 39.1031,
        'longitude' : -84.512,
        'revenueOpportunity' : 100000,
        'date' : '2018-10-23'
      }, {
        'venueName' : 'D5',
        'cityName' : 'Chicago, Illinois',
        'latitude' : 41.8781,
        'longitude' : -87.6298,
        'revenueOpportunity' : 1900000,
        'date' : '2018-10-24'
      }, {
        'venueName' : 'R7',
        'cityName' : 'Toronto, Canada',
        'latitude' : 43.6532,
        'longitude' : -79.3832,
        'revenueOpportunity' : 2400000,
        'date' : '2018-10-25'
      }, {
        'venueName' : 'T10',
        'cityName' : 'Seattle, Washington',
        'latitude' : 47.6062,
        'longitude' : -122.3321,
        'revenueOpportunity' : 1500000,
        'date' : '2018-10-29'
      }, {
        'venueName' : 'A1',
        'cityName' : 'Phoenix, California',
        'latitude' : 33.4484,
        'longitude' : -112.074,
        'revenueOpportunity' : 100000,
        'date' : '2018-11-29'
      }, {
        'venueName' : '9D',
        'cityName' : 'Atlanta, Georgia',
        'latitude' : 33.749027,
        'longitude' : -84.388229,
        'revenueOpportunity' : 10000000,
        'date' : null
      } ]
    });
  }

  private hardCodedWithID(): Solution {
    return new Solution().deserialize({
      'solutionName' : 'MPC Demo',
      'solutionEntries' : [ {
        'accountId' : '100',
        'venueName' : 'C8',
        'cityName' : 'New York, New York',
        'latitude' : 40.7128,
        'longitude' : -74.006,
        'revenueOpportunity' : 2200000,
        'date' : '2018-10-16'
      }, {
        'accountId' : '101',
        'venueName' : 'E3',
        'cityName' : 'Dallas, Texas',
        'latitude' : 32.7767,
        'longitude' : -96.797,
        'revenueOpportunity' : 2400000,
        'date' : '2018-10-17'
      }, {
        'accountId' : '102',
        'venueName' : 'V2',
        'cityName' : 'Foster City, California',
        'latitude' : 37.5585,
        'longitude' : -122.2711,
        'revenueOpportunity' : 13000000,
        'date' : '2018-10-18'
      }, {
        'accountId' : '103',
        'venueName' : 'P4',
        'cityName' : 'Mexico City, Mexico',
        'latitude' : 19.4326,
        'longitude' : -99.1332,
        'revenueOpportunity' : 2000000,
        'date' : '2018-10-22'
      }, {
        'accountId' : '104',
        'venueName' : 'M6',
        'cityName' : 'Rochester, New York',
        'latitude' : 39.1031,
        'longitude' : -84.512,
        'revenueOpportunity' : 100000,
        'date' : '2018-10-23'
      }, {
        'accountId' : '105',
        'venueName' : 'D5',
        'cityName' : 'Chicago, Illinois',
        'latitude' : 41.8781,
        'longitude' : -87.6298,
        'revenueOpportunity' : 1900000,
        'date' : '2018-10-24'
      }, {
        'accountId' : '106',
        'venueName' : 'R7',
        'cityName' : 'Toronto, Canada',
        'latitude' : 43.6532,
        'longitude' : -79.3832,
        'revenueOpportunity' : 2400000,
        'date' : '2018-10-25'
      }, {
        'accountId' : '107',
        'venueName' : 'T10',
        'cityName' : 'Seattle, Washington',
        'latitude' : 47.6062,
        'longitude' : -122.3321,
        'revenueOpportunity' : 1500000,
        'date' : '2018-10-29'
      }, {
        'accountId' : '108',
        'venueName' : 'A1',
        'cityName' : 'Phoenix, California',
        'latitude' : 33.4484,
        'longitude' : -112.074,
        'revenueOpportunity' : 100000,
        'date' : '2018-11-29'
      }, {
        'accountId' : '109',
        'venueName' : '9D',
        'cityName' : 'Atlanta, Georgia',
        'latitude' : 33.749027,
        'longitude' : -84.388229,
        'revenueOpportunity' : 10000000,
        'date' : null
      } ]
    });

  }

}
