import { Component, OnInit } from '@angular/core';
import { UserListService } from "./user-list.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  
  public users?: User[];
  public selectedUser?: User;
  
  constructor(private userService: UserListService) {}
  
  ngOnInit() : void {
    this.getUsers();
  }
  
  getUsers() : void {
   this.userService.getUsers().subscribe(results => {
     this.users = results
   }, error => console.error(error));
  }
}

export interface User {
  id: number;
  name: string;
}