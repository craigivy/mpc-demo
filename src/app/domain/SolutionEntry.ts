
export class SolutionEntry implements Serializable<SolutionEntry> {

  public venueName: String;
  public cityName: String;
  public latitude: number;
  public longitude: number;
  public revenueOpportunity: number;
  public date: Date;

  deserialize(input): SolutionEntry {
    this.venueName = input.venueName;
    this.cityName = input.cityName;
    this.latitude = input.latitude;
    this.longitude = input.longitude;
    this.revenueOpportunity = input.revenueOpportunity;
    this.date = new Date(input.date);
    return this;
  }
}
