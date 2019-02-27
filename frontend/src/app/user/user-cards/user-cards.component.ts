import { Component, OnInit } from '@angular/core';
import {Reservation} from "../../shared/reservation";
import {ReservationService} from "../../shared/reservation.service";
import {FlashMessagesService} from "angular2-flash-messages";

@Component({
  selector: 'app-user-cards',
  templateUrl: './user-cards.component.html',
  styleUrls: ['./user-cards.component.css'],
  providers:[ReservationService]
})
export class UserCardsComponent implements OnInit {

  constructor(private reservationservice:ReservationService,private falshmessage: FlashMessagesService) { }

  ngOnInit() {
    this.getuserreservations();
  }
  getuserreservations(){
    var date=new Date();
    date.setDate(date.getDate()-1);
    var date1=new Date(date.setHours(0,0)).toISOString();

    this.reservationservice.getuserreservations().subscribe((res)=> {
      this.reservationservice.reservations=res as Reservation[];
      var index=this.reservationservice.reservations.length;
      for(var i=index;i>0;i--){
        this.reservationservice.selectedReservation=this.reservationservice.reservations[i-1];
        var date2=new Date(this.reservationservice.selectedReservation.date);
        var date3=new Date(date2.setHours(0,0)).toISOString();
        if (date3<date1){
          this.reservationservice.reservations.splice(i-1,1);
        }
      }
    });
  }
}
