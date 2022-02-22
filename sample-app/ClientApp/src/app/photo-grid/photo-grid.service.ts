import {Inject, Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Photo} from "./photo-grid.component";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {APP_BASE_HREF} from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class PhotoGridService {

  private photosUrl = 'photo/';
  
  constructor(@Inject(APP_BASE_HREF) private baseHref: string, private http: HttpClient,) { }
  
  public getPhotos(albumId : number) : Observable<Photo[]> {
    return this.http.get<Photo[]>(this.baseHref + this.photosUrl + albumId);
  }
}
