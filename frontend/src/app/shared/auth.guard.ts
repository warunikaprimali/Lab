import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';
import { UserService } from './user.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private userservice: UserService, private router: Router) {}

  canActivate() {
    if(this.userservice.loggedIn()) {
      if(this.userservice.gettype()=="admin"){
        return true;
      }
      else{
        this.router.navigate(['/userhomepage']);
        return false;
      }
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
