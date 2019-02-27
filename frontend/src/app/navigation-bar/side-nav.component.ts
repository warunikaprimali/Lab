import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../shared/user.service";

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],

})
export class SideNavComponent implements OnInit {

  constructor(private userService:UserService,private router:Router) { }

  ngOnInit() {

  }

  logout(){
    this.userService.logout();
    this.router.navigate(['/userhomepage']);
  }
}
