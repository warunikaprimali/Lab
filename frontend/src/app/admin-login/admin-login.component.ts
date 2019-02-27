import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {UserService} from "../shared/user.service";
import {BootstrapAlertService,BootstrapAlert} from "ngx-bootstrap-alert";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css'],
  providers:[UserService]
})
export class AdminLoginComponent implements OnInit {
email:String;
password:String;
  constructor(private userService:UserService,private bootstrapAlertService:BootstrapAlertService,private router:Router) {
  }

  ngOnInit() {
      $('#password').focusin(function(){
      $('form').addClass('up')
    });
    $('#password').focusout(function(){
      $('form').removeClass('up')
    });

// Panda Eye move
    $(document).on( "mousemove", function( event ) {
      var dw = $(document).width() / 15;
      var dh = $(document).height() / 15;
      var x = event.pageX/ dw;
      var y = event.pageY/ dh;
      $('.eye-ball').css({
        width : x,
        height : y
      });
    });

// validation


    $('.btn').click(function(){
      $('form').addClass('wrong-entry');
      setTimeout(function(){
        $('form').removeClass('wrong-entry');
      },3000 );
    });



  }
login(){
    const user={
    email:this.email,
    password:this.password
  }
  this.userService.login(user).subscribe((res:any)=>{
    if(res.state) {
      this.userService.storeData(res.token, res.user);
      this.bootstrapAlertService.alert(new BootstrapAlert("Successfully Logged In","alert-info"));
      this.router.navigate(['/admindashboard']);
    }

    else{
      console.log(res.state);
      this.bootstrapAlertService.alert(new BootstrapAlert("Invalid","alert-danger"));
      this.router.navigate(['/adminlogin']);
    }
  })
}
}
