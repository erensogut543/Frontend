export class Notes {
  public subject: string;
  public description: string;
  public department: string;
  public file: any;


  constructor(subject: string, description: string, department: string, file:string) {
    this.subject = subject
    this.description = description;
    this.department = department;
    this.file = file;
  }

}
