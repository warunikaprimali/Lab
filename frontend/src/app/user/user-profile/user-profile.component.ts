import { Component, OnInit } from '@angular/core';
import {ReservationService} from "../../shared/reservation.service";
import {UserService} from "../../shared/user.service";
import {BootstrapAlert, BootstrapAlertService} from "ngx-bootstrap-alert";
import {Reservation} from "../../shared/reservation";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
  providers:[ReservationService,UserService],
})
export class UserProfileComponent implements OnInit {

  constructor(private reservationservice:ReservationService,private userservice:UserService,private bootstrapAlertService:BootstrapAlertService) { }

  ngOnInit() {
    this.getReservationsToBeConfirmed();
  }
  getReservationsToBeConfirmed(){
    this.reservationservice.userreservations(this.userservice.getemail()).subscribe((res)=> {
      this.reservationservice.reservations=res as Reservation[];
    });
    this.reservationservice.userreservationsconfirmed(this.userservice.getemail()).subscribe((res)=> {
      this.reservationservice.reservationsc=res as Reservation[];
    });
    this.reservationservice.userreservationsremoved(this.userservice.getemail()).subscribe((res)=> {
      this.reservationservice.reservationsr=res as Reservation[];
    });
  }

  delete(id){
    this.reservationservice.delete(id).subscribe((res)=> {
      this.bootstrapAlertService.alert(new BootstrapAlert("rejected reservation","alert-danger"));
      this.getReservationsToBeConfirmed();//reload table
    });
  }
}
