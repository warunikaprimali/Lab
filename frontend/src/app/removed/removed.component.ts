import { Component, OnInit } from '@angular/core';
import {Reservation} from "../shared/reservation";
import {ReservationService} from "../shared/reservation.service";
import {FlashMessagesService} from "angular2-flash-messages";

@Component({
  selector: 'app-removed',
  templateUrl: './removed.component.html',
  styleUrls: ['./removed.component.css'],
  providers:[ReservationService]
})
export class RemovedComponent implements OnInit {

  constructor(private reservationservice:ReservationService,private falshmessage: FlashMessagesService) { }

  ngOnInit() {
    this.getremovedreservations();
  }
  getremovedreservations(){
    this.reservationservice.getremovedreservations().subscribe((res)=> {
      this.reservationservice.reservations=res as Reservation[];
    });
  }
}
