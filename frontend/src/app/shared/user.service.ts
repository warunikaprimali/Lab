import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from "@angular/common/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {tokenNotExpired} from "angular2-jwt";
import {User} from "./user";

@Injectable()
export class UserService {
user:any;
authToken: any;
  email:any;
  name:any;
  type:any;
  loggedUser:any;
  public userCount:any
  constructor(private http:HttpClient) { }
login(user){
  let headers = new HttpHeaders();
  headers.append('Content-Type', 'application/json');
  return this.http.post('http://localhost:3000/user/login', user, {headers: headers});
}

  storeData(token, user){
    localStorage.setItem("tokenid", token);
    localStorage.setItem("user", JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }
  loggedIn(){
    return tokenNotExpired('tokenid');
  }
  logout(){
    this.authToken=null;
    this.user=null;
    localStorage.clear();
  }
  registerUser(user: User){
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/user/register', user, {headers: headers});

  }

  getemail(){
    let user=  localStorage.getItem("user");
    this.loggedUser=JSON.parse(user);
    this.email=this.loggedUser.email;
    return this.email;
  }

  getname(){
    let user=  localStorage.getItem("user");
    this.loggedUser=JSON.parse(user);
    this.name=this.loggedUser.name;
    return this.name;
  }
  gettype(){
    let user=  localStorage.getItem("user");
    this.loggedUser=JSON.parse(user);
    this.type=this.loggedUser.type;
    return this.type;
  }
  getUserCount(){
    return this.http.get('http://localhost:3000/user/userCount');
  }
}
