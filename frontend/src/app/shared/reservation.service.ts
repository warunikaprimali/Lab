import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from "@angular/common/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {Reservation} from "./reservation";

@Injectable()
export class ReservationService {
  public selectedReservation:Reservation=new Reservation();
  public reservations:Reservation[];
  public reservationsc:Reservation[];
  public reservationsr:Reservation[];
  public count:any;
  public cCount:any;
  public rCount:any;
  public uCount:any;
  constructor(private http:HttpClient) { }


  getReservationsToBeConfirmed(){
    // let headers = new HttpHeaders();
    // headers.append('Content_Type', 'application/json');
    return this.http.get('http://localhost:3000/reservation/newreservations');
  }
  confirm(_id:string){
    let headers=new HttpHeaders();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/reservation/confirm',{_id},{headers:headers});
  }
  delete(_id:string){
    console.log(_id);
    let headers=new HttpHeaders();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/reservation/delete',{_id},{headers:headers});
  }
  getconfirmedreservations(){
    // let headers = new HttpHeaders();
    // headers.append('Content_Type', 'application/json');
    return this.http.get('http://localhost:3000/reservation/viewconfirmed');
  }
  getremovedreservations(){
    // let headers = new HttpHeaders();
    // headers.append('Content_Type', 'application/json');
    return this.http.get('http://localhost:3000/reservation/viewremoved');
  }
  getconfirmedCount(){
    // let headers = new HttpHeaders();
    // headers.append('Content_Type', 'application/json');
    return this.http.get('http://localhost:3000/reservation/confirmedCount');
  }
  getuserreservations(){
    return this.http.get('http://localhost:3000/reservation/getreservationsuser');
  }
  getyearmonth(yearmonth:String){
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/reservation/yearmonthcount', {yearmonth}, {headers: headers});
  }

  getcurrentReservation(reservation){
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/reservation/currentReservations', reservation, {headers: headers});
  }

  addReservation(reservation){
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/reservation/addreservation', reservation, {headers: headers});
  }
  userreservations(email:String){
    // console.log(email);
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/reservation/userreservation',{email}, {headers: headers});
  }
  userreservationsconfirmed(email:String){
    // console.log(email);
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/reservation/userreservationconfirmed',{email}, {headers: headers});
  }
  userreservationsremoved(email:String){
    // console.log(email);
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/reservation/userreservationremoved',{email}, {headers: headers});
  }
  getCCount(){
    return this.http.get('http://localhost:3000/reservation/cCount');
  }

  getRCount(){
    return this.http.get('http://localhost:3000/reservation/rCount');
  }

  getUCount(){
    return this.http.get('http://localhost:3000/reservation/uCount');
  }

}
