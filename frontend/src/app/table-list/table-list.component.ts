import { Component, OnInit } from '@angular/core';
import {ReservationService} from "../shared/reservation.service";
import {Reservation} from "../shared/reservation";
import {BootstrapAlert, BootstrapAlertService} from "ngx-bootstrap-alert";

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css'],
  providers:[ReservationService],
})
export class TableListComponent implements OnInit {

  constructor(private reservationservice:ReservationService,private bootstrapAlertService:BootstrapAlertService) { }

  ngOnInit() {
    this.getReservationsToBeConfirmed();
  }
getReservationsToBeConfirmed(){
    this.reservationservice.getReservationsToBeConfirmed().subscribe((res)=> {
      this.reservationservice.reservations=res as Reservation[];
    });
  }
  confirm(id){
    this.reservationservice.confirm(id).subscribe((res)=> {
      this.bootstrapAlertService.alert(new BootstrapAlert("successfully confirmed","alert-success"));
      this.getReservationsToBeConfirmed();//reload table
    });
  }
  delete(id){
    this.reservationservice.delete(id).subscribe((res)=> {
      this.bootstrapAlertService.alert(new BootstrapAlert("rejected reservation","alert-danger"));
      this.getReservationsToBeConfirmed();//reload table
    });
  }
}
