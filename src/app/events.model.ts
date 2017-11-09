export class Events {
  public header: string;
  public description: string;
  public date: number;
  public file: any;


  constructor(header: string, description: string, date: number, file:string) {
    this.header = header;
    this.description = description;
    this.date = date;
    this.file = file;
  }

}
