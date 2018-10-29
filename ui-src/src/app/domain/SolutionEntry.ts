
export class SolutionEntry implements Serializable<SolutionEntry> {

  public accountId: String;
  public venueName: String;
  public cityName: String;
  public latitude: number;
  public longitude: number;
  public revenueOpportunity: String;
  public date: Date;

  deserialize(input): SolutionEntry {
    this.accountId = input.accountId;
    this.venueName = input.venueName;
    this.cityName = input.cityName;
    this.latitude = input.latitude;
    this.longitude = input.longitude;
    this.revenueOpportunity = input.revenueOpportunity;
    this.date = new Date(input.date);
    return this;
  }

  deserializeAccount(input): SolutionEntry {
    this.accountId = input.accountId;
    this.venueName = input.venueName;
    this.cityName = input.city;
    this.latitude = input.latitude;
    this.longitude = input.longitude;
    this.revenueOpportunity = input.revenueOpportunityStr;
    if (input.availableDate !== null) {
      this.date = new Date(input.availableDate);
    } else {
      this.date = null;
    }
    return this;
  }

  getMonthDay(): String {
    if (this.date === null) {
      return '';
    }
    return (this.date.getMonth() + 1) + '/' + this.date.getUTCDate();
  }

}
