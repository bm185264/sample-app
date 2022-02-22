import { Component, OnInit } from '@angular/core';
import {PhotoGridService} from "./photo-grid.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-photo-grid',
  templateUrl: './photo-grid.component.html',
  styleUrls: ['./photo-grid.component.css']
})
export class PhotoGridComponent implements OnInit {

  public photos? : Photo[];
  public albumId? : number;
  
  constructor(private photoGridService : PhotoGridService,
              private route : ActivatedRoute) { }

  ngOnInit() {
    this.getPhotos();
  }

  getPhotos() : void {
    this.albumId = Number(this.route.snapshot.paramMap.get('albumId'));
    this.photoGridService.getPhotos(this.albumId).subscribe(results => {
      this.photos = results
    }, error => console.error(error));
  }
}

export interface Photo {
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}