export class Article {
  public id: number;
  public description: string;
  public price: number;

  constructor(id: number, description: string, price: number) {
    this.id = id;
    this.description = description;
    this.price = price;
  }
}
