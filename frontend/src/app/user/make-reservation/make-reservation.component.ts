import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Reservation } from "../../shared/reservation";
import * as $ from 'jquery';
import {ReservationService} from "../../shared/reservation.service";
import {BootstrapAlertService,BootstrapAlert} from "ngx-bootstrap-alert";

@Component({
  selector: 'app-make-reservation',
  templateUrl: './make-reservation.component.html',
  styleUrls: ['./make-reservation.component.css'],
  providers: [ReservationService]
})
export class MakeReservationComponent implements OnInit {
  public reservation:Reservation=new Reservation();
  lab:string;
  date:string;
  from:string;
  to:string;
  email:string;
  name:string;
  role:string;
  year:string;
  reason:string;


  constructor(private router:Router,private reservationservice:ReservationService,private bootstrapAlertService:BootstrapAlertService) { }

  ngOnInit() {
  }


  showyear(){
    if(this.role=='lecturer'||this.role=='professor'||this.role=='Instructor'){
      $("#year").hide();
    }
    if(this.role=='student'){
      $("#year").show();
    }
  }

}
