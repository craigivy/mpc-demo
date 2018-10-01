import { SolutionEntry } from './SolutionEntry';

export class Solution implements Serializable<Solution> {

  public solutionName: String;

  public solutionEntries: SolutionEntry[];

  public getWaypoints(): {location: String, stopover: boolean}[] {
    return this.solutionEntries.map(es => {
      return  {location: es.cityName, stopover: true };
    });
  }

  public getLatLongArray(): {latitude: number, longitude: number, label: String}[] {
    return this.solutionEntries.map(es => {
      return  {latitude: es.latitude, longitude: es.longitude, label: es.venueName };
    });
  }

  public getElections(): {accountId: String, venueName: String, cityName: String, date: Date}[] {
    return this.solutionEntries.map(es => {
      return  {accountId: es.accountId, venueName: es.venueName, cityName: es.cityName, date: es.date};
    });
  }

  deserialize(input): Solution {
    this.solutionName = input.solutionName;
    const array: any[] = input.solutionEntries;
    this.solutionEntries = array.map(i => new SolutionEntry().deserialize(i));
    return this;
  }

  deserializeAccounts(input): Solution {
    const array: any[] = input;
    this.solutionEntries = array.map(i => new SolutionEntry().deserializeAccount(i));
    return this;
  }
}
