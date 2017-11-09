export class Sales {
  public header: string;
  public description: string;
  public price: number;
  public UserImage: File;


  constructor(header: string, description: string, price: number, UserImage: File) {
    this.header = header;
    this.description = description;
    this.price = price;
    this.UserImage = UserImage;
  }

}
