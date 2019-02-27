import { Component, OnInit } from '@angular/core';
import {BootstrapAlert, BootstrapAlertService} from "ngx-bootstrap-alert";
import {Router} from "@angular/router";
import {ReservationService} from "../../shared/reservation.service";
import {Reservation} from "../../shared/reservation";
import * as $ from 'jquery';
import {UserService} from "../../shared/user.service";

import * as Moment from "moment";
import {extendMoment} from "moment-range";

const moment=extendMoment(Moment);

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css'],
  providers: [ReservationService,UserService]

})
export class ReservationFormComponent implements OnInit {
  public show=false;
  public selectedReservation=new Reservation();
  public reservation:Reservation=new Reservation();
  public reservations:Reservation[];
  lab:string;
  date:string;
  from:string;
  to:string;
  email:string;
  name:string;
  role:string;
  year:string;
  reason:string;
  showerror:any;

  constructor(private router:Router,private reservationservice:ReservationService,private bootstrapAlertService:BootstrapAlertService,private userService:UserService) { }

  ngOnInit() {

  }

  checkoverlap(){
    this.showerror=false;
    if(this.from && this.to && this.date && this.lab){
      let date=new Date(this.date);
      const time=this.from;
      let t=time.split('.');
      let t1=parseInt(t[0]);
      let start=new Date(date.setHours(t1,0));
      const time1=this.to;
      let t2=time1.split('.');
      let t3=parseInt(t2[0]);
      let end=new Date(date.setHours(t3,0));
      const range = moment.range(start, end);
      this.reservation.date=this.date;
      this.reservation.lab=this.lab;
      this.reservationservice.getcurrentReservation(this.reservation).subscribe((res:any)=>{
        this.reservations=res as Reservation[];
        for(let i=0;i<this.reservations.length;i++){
          this.selectedReservation=this.reservations[i];
          let date1=new Date(this.selectedReservation.date);
          const time2=this.selectedReservation.from;
          let t4=time2.split('.');
          let t5=parseInt(t4[0]);
          let start1=new Date(date1.setHours(t5,0));
          const time3=this.selectedReservation.to;
          let t6=time3.split('.');
          let t7=parseInt(t6[0]);
          let end1=new Date(date1.setHours(t7,0));
          const range1 = moment.range(start1, end1);
          if(range1.overlaps(range)){
            this.showerror=true;
            this.bootstrapAlertService.alert(new BootstrapAlert("Your time peiaod is overlap with Other Reservation", "alert-warning"));
            break;
          }

        }

      })
    }
  }
  showyear(){
    if(this.role=='lecturer'||this.role=='professor'||this.role=='Instructor'){
      $("#year").hide();
    }
    if(this.role=='student'){
      $("#year").show();
    }
  }

  createreservation(){
    this.reservation.lab=this.lab;
    this.reservation.date=this.date;
    this.reservation.from=this.from;
    this.reservation.to=this.to;
    this.reservation.name=this.userService.getname();
    this.reservation.email=this.userService.getemail();
    this.reservation.role=this.role;
    this.reservation.year=this.year;
    this.reservation.reason=this.reason;
    this.reservationservice.addReservation(this.reservation).subscribe((res:any)=>{
      this.bootstrapAlertService.alert(new BootstrapAlert("Successfully Reserved.Wait for Confirmation","alert-info"));
      this.router.navigate(['/userhomepage']);
    })
  }
  currentReservations(){
    this.showerror=false;
    this.checkoverlap();
    if(this.lab && this.date){
      this.reservation.date=this.date;
      this.reservation.lab=this.lab;
      this.reservationservice.getcurrentReservation(this.reservation).subscribe((res:any)=>{
        this.reservationservice.reservations=res as Reservation[];
        console.log(this.reservationservice.reservations);
      });
    }
  }


}
