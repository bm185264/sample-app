import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {User} from "./user-list.component";

@Injectable({
  providedIn: 'root'
})
export class UserListService {

  private allUsersUrl = 'user';
  
  constructor(private http: HttpClient, private router: Router) { }
  
  public getUsers() : Observable<User[]> {
    return this.http.get<User[]>(this.router.url + this.allUsersUrl);
  }
}
