import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { APP_BASE_HREF } from "@angular/common";

import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { AlbumPanelComponent } from './album-panel/album-panel.component';
import { PhotoGridComponent } from './photo-grid/photo-grid.component';
import { AppRoutingModule } from "./app-routing.module";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent, 
    AlbumPanelComponent, 
    PhotoGridComponent, 
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule, 
    AppRoutingModule
  ],
  providers: [
      { provide: APP_BASE_HREF, useValue: '/'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
