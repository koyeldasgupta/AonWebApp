
import {Injectable} from "@angular/core";
import {HttpClient, HttpParams ,HttpErrorResponse} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Group} from "../model/group";
import {map} from "rxjs/operators";
import {User} from "../model/user";


@Injectable()
export class GroupsService {
    private readonly API_URL = 'http://localhost:24369/api/Group';
    constructor(private http:HttpClient) {

    }
    findAllGroups(): Observable<Group[]> {
        return this.http.get<Group[]>(this.API_URL);
          
    }
    findAllGroupUsers(groupId:number): Observable<User[]> {
         return this.http.get<User[]>(this.API_URL+"/"+groupId+"/getUsers", {
        })
    }
    assignUsertoGroup(userId,groupId):void{
        this.http.get<any>(this.API_URL+"/"+userId+"/"+groupId).subscribe (data =>{
            alert("User has been assigned");
       },(error: HttpErrorResponse) => {
         console.log (error.name + ' ' + error.message);
         });
     }
  
}