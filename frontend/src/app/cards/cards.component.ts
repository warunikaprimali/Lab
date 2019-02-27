import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ReservationService} from "../shared/reservation.service";
import { BootstrapAlertService, BootstrapAlert } from 'ngx-bootstrap-alert';

import {Reservation} from "../shared/reservation";
import {UserService} from "../shared/user.service";

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
  providers: [UserService,ReservationService]
})
export class CardsComponent implements OnInit {

  reservation:any;
  constructor(private router: Router,private userService:UserService, private reservationService: ReservationService,private bootstrapAlertService:BootstrapAlertService){ }


  ngOnInit() {
    this.getCCount();
    this.getRCount();
    this.getUCount();
    this.getUserCount();
  }

  getCCount(){
    this.reservationService.getCCount().subscribe((res)=>{
      console.log(res);
      this.reservationService.cCount=res;
    })
  }

  getRCount(){
    this.reservationService.getRCount().subscribe((res)=>{
      this.reservationService.rCount=res;
    })
  }

  getUCount(){
    this.reservationService.getUCount().subscribe((res)=>{
      this.reservationService.uCount=res;
    })
  }
  getUserCount(){
    this.userService.getUserCount().subscribe((res)=>{
      this.userService.userCount=res;
    })
  }

}
