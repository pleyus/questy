export class Category {
  constructor(
    public Id: number = 0,
    public Name: string = '') {}

  public static Parse(json: any): Category {
    const c = new Category();
    if (typeof json === 'object') {
      c.Id = json.Id;
      c.Name = json.Name;
    }
    return c;
  }

  public ToJson(): any {
    return { Id: this.Id, Name: this.Name };
  }
}
