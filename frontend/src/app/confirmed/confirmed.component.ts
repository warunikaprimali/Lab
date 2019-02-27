import { Component, OnInit } from '@angular/core';
import {Reservation} from "../shared/reservation";
import {ReservationService} from "../shared/reservation.service";
import {BootstrapAlert} from "ngx-bootstrap-alert";
import {BootstrapAlertService} from "ngx-bootstrap-alert";


@Component({
  selector: 'app-confirmed',
  templateUrl: './confirmed.component.html',
  styleUrls: ['./confirmed.component.css'],
  providers:[ReservationService]
})
export class ConfirmedComponent implements OnInit {

  constructor(private reservationservice:ReservationService,private bootstrapAlertService:BootstrapAlertService) { }

  ngOnInit() {
    this.getReservationsToBeConfirmed();
  }
  getReservationsToBeConfirmed(){
    this.reservationservice.getconfirmedreservations().subscribe((res)=> {
      this.reservationservice.reservations=res as Reservation[];
    });
  }
  delete(id){
    this.reservationservice.delete(id).subscribe((res)=> {
      this.bootstrapAlertService.alert(new BootstrapAlert("rejected reservation","alert-danger"));
      this.getReservationsToBeConfirmed();//reload table
    });
  }
}
