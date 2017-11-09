import {Http, Response, Headers, RequestOptions, RequestMethod, ResponseContentType} from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import {Injectable} from "@angular/core";
import {Users} from "./users.model";
import {ContentType} from "@angular/http/src/enums";
import {deserializeSummaries} from "@angular/compiler/src/aot/summary_serializer";


@Injectable()
export class DataService {

  constructor(private http: Http) {
  }

  public getUserWithId() {
    return this.http.get('http://localhost:58632/api/Users/1026')
      .map((response: Response) => response.json());
  }

  public post(users: object) {
    // let headers = new Headers();
    // headers.append('Content-Type', 'application/json');
    // let myJson = JSON.stringify(users);
    return this.http.post('http://localhost:58632/api/Users',users
      // {headers: headers}
      )
      // .map(res =>  res.json())
  }
}
