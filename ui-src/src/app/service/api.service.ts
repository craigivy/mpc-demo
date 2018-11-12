import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, merge } from 'rxjs';
import { mapTo, delay, map, tap } from 'rxjs/operators';
import { Solution, Settings } from '../domain';

// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/toPromise';

@Injectable()
export class ApiService {

  // swagger link -http://mpc-demo-mpc-demo.tate.rh.stencell.net/swagger-ui.html#/
  private base = 'http://mpc-demo-mpc-demo.tate.rh.stencell.net/api/solver/';
  private voteUrl = this.base + 'userinput';
  private allAccountsUrl = this.base + 'allaccounts';
  private accountsUrl = this.base + 'defaultaccounts';
  private requestedUrl = this.base + 'selectedaccounts';
  private solutionUrl = this.base + 'solution';
  private logCacheUrl = this.base + 'printcache';
  private settings: Settings;

  private configUrl = 'api/config';

  constructor(private http: HttpClient) {
  }

    public initializeApp() {
    console.log(`ApiService:: initializeApp configURL=` + this.configUrl);
    const obs = this.http.get(this.configUrl);
    obs.subscribe(
      (response) => {
        this.settings = new Settings().deserialize(response);
        console.log('settings: ' + JSON.stringify(this.settings));
      },
      (error) => console.log('`ApiService:: initializeApp error ' + error)
      );
  }

  public getAllAccounts(): Observable<Solution> {
    return this.http.get(this.allAccountsUrl).pipe(map(o => new Solution().deserializeAccounts(o)));
  }

  public getSolution(): Observable<Solution> {
    return this.http.get(this.solutionUrl).pipe(map(o => new Solution().deserializeAccounts(o)));
  }

  public getAccounts(): Observable<Solution> {

    return this.http.get(this.accountsUrl).pipe(map(o => new Solution().deserializeAccounts(o)));

    // return of(this.hardCodedWithID());
  }

  public getRequestedAccounts(): Observable<Solution> {
    return this.http.get(this.requestedUrl).pipe(map(o => {
      console.log(o);
      return new Solution().deserializeAccounts(o);
    }));
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
    console.log(this.logCacheUrl, 'will log the cache');
  }

  private handleError(error: HttpErrorResponse) {
    console.log('ApiServer:: handleError');
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // // return an observable with a user-facing error message
    // return throwError(
    //   'Something bad happened; please try again later.');
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
