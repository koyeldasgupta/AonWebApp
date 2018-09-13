import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {User} from '../model/user';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from "rxjs/Observable";

@Injectable()
export class LoginService {
  readonly API_URL = 'http://localhost:24369/api/User';
  constructor (private httpClient: HttpClient) {}
  isVaildIser(username):Observable<User>{
      return this.httpClient.get<User>(this.API_URL+'/'+username);
  }

}




