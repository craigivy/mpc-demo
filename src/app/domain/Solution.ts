import { SolutionEntry } from './SolutionEntry';

export class Solution implements Serializable<Solution> {

  public solutionName: String;

  public solutionEntries: SolutionEntry[];

  public getLatLongArray(): {latitude: number, longitude: number, label: String}[] {
    return this.solutionEntries.map(es => {
      return  {latitude: es.latitude, longitude: es.longitude, label: es.venueName };
    });
  }

  deserialize(input): Solution {
    this.solutionName = input.solutionName;
    const array: any[] = input.solutionEntries;
    this.solutionEntries = array.map(i => new SolutionEntry().deserialize(i));
    return this;
  }
}
