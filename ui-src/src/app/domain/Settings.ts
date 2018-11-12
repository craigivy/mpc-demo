
export class Settings implements Serializable<Settings> {

  public apiBase: String;
  public mapKey: String;

  deserialize(input): Settings {
    this.apiBase = input.apiBase;
    this.mapKey = input.mapKey;
    return this;
  }
}
