import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

import {AlbumPanelComponent} from "./album-panel/album-panel.component";
import {PhotoGridComponent} from "./photo-grid/photo-grid.component";
import {UserListComponent} from "./user-list/user-list.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";

const routes : Routes = [
  { path: '', component : UserListComponent, pathMatch: 'full'},
  { path : 'view-user/:userId', component : AlbumPanelComponent },
  { path : 'view-album/:albumId', component : PhotoGridComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
      RouterModule.forRoot(routes)
  ],
  exports: [
      RouterModule
  ]
})
export class AppRoutingModule { }
