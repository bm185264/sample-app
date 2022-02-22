import {Component, OnInit} from '@angular/core';
import { Photo } from "../photo-grid/photo-grid.component";
import {AlbumPanelService} from "./album-panel.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: 'app-album-panel',
  templateUrl: './album-panel.component.html',
  styleUrls: ['./album-panel.component.css']
})
export class AlbumPanelComponent implements OnInit {

  public albums? : Album[];
  public userId? : number;
  
  constructor(private albumPanelService : AlbumPanelService, 
              private route : ActivatedRoute) { }

  ngOnInit() : void {
   this.getAlbums();
  }
  
  getAlbums() : void {
    this.userId = Number(this.route.snapshot.paramMap.get('userId'));
    this.albumPanelService.getAlbums(this.userId).subscribe(results => {
      this.albums = results
    }, error => console.error(error));
  }
}

export interface Album {
  id: number;
  title: string;
  thumbnail: Photo;
}