import { Component, OnInit,ElementRef,ViewChild } from '@angular/core';
import * as JSPDF from 'jspdf';
import {Reservation} from "../shared/reservation";
import {BootstrapAlert, BootstrapAlertService} from "ngx-bootstrap-alert";
import {UserService} from "../shared/user.service";
import {Router} from "@angular/router";
import {ReservationService} from "../shared/reservation.service";


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css'],
  providers: [UserService,ReservationService]
})
export class ReportComponent implements OnInit {
@ViewChild('pdfcontent') content:ElementRef;
  yearmonth:String;
  yrmnth:String;
  constructor(private reservationservice:ReservationService,private router: Router,private userService:UserService,private bootstrapAlertService:BootstrapAlertService) { }

  ngOnInit() {
    this.getCCount();
    this.getRCount();
    this.getUCount();
    this.getUserCount();
  }

  downloadpdf(){
    const pdf=new JSPDF();
    let specialElementHandlers={
      '#editor':function(element,render){
        return true;
    }
    };
    let content=this.content.nativeElement;
   pdf.fromHTML(content,10,10,{
     'width':190,
     'elementHandlers':specialElementHandlers
   });
   pdf.save('monthlyreport');
    this.bootstrapAlertService.alert(new BootstrapAlert("Successfully generated","alert-success"));
  }

  // confirmedCount(){
  //   this.reservationservice.getconfirmedCount().subscribe((res)=> {
  //     this.reservationservice.count=res;
  //   });
  // }

  getyearmonthcount() {
   this.yrmnth=this.yearmonth;
    this.reservationservice.getyearmonth(this.yearmonth).subscribe((res) => {
      this.reservationservice.count = res;
    });
  }
  getCCount(){
    this.reservationservice.getCCount().subscribe((res)=>{
      console.log(res);
      this.reservationservice.cCount=res;
    })
  }

  getRCount(){
    this.reservationservice.getRCount().subscribe((res)=>{
      this.reservationservice.rCount=res;
    })
  }

  getUCount(){
    this.reservationservice.getUCount().subscribe((res)=>{
      this.reservationservice.uCount=res;
    })
  }
  getUserCount(){
    this.userService.getUserCount().subscribe((res)=>{
      this.userService.userCount=res;
    })
  }
}
