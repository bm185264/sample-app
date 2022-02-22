import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {Album} from "./album-panel.component";
import {APP_BASE_HREF} from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class AlbumPanelService {

  private userAlbumsUrl = 'album/';
  
  public constructor(@Inject(APP_BASE_HREF) private baseHref: string, private http: HttpClient, private router: Router) { }
  
  public getAlbums(userId : number) : Observable<Album[]> {
    return this.http.get<Album[]>(this.baseHref + this.userAlbumsUrl + userId);
  }
}
