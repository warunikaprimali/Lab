import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {UserService} from "../shared/user.service";
import {User} from "../shared/user";
import {BootstrapAlertService,BootstrapAlert} from "ngx-bootstrap-alert";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService]
})
export class RegisterComponent implements OnInit {
  public user: User = new User();
  name: string;
  email: string;
  password: string;
  constructor(private userService: UserService, private bootstrapAlertService: BootstrapAlertService, private router: Router) {
  }

  ngOnInit() {
    $('.name').on("change keyup paste",
      function(){
        if($(this).val()){
          $('.icon-paper-plane').addClass("next");
        } else {
          $('.icon-paper-plane').removeClass("next");
        }
      }
    );

    $('.next-button.name').click(
      function(){
        console.log("Something");
        $('.name-section').addClass("fold-up");
        $('.email-section').removeClass("folded");
      }
    );

    $('.email').on("change keyup paste",
      function(){
        if($(this).val()){
          $('.icon-lock').addClass("next");
        } else {
          $('.icon-lock').removeClass("next");
        }
      }
    );

    $('.next-button').hover(
      function(){
        $(this).css('cursor', 'pointer');
      }
    );

    $('.next-button.email').click(
      function(){
        console.log("Something");
        $('.email-section').addClass("fold-up");
        $('.password-section').removeClass("folded");
      }
    );



    $('.next-button').hover(
      function(){
        $(this).css('cursor', 'pointer');
      }
    );


    $('.password').on("change keyup paste",
      function(){
        if($(this).val()){
          $('.icon-lock').addClass("next");
        } else {
          $('.icon-lock').removeClass("next");
        }
      }
    );

    $('.next-button.password').click(
      function(){
        console.log("Something");
        $('.repeat-section').addClass("fold-up");
        $('.success').css("marginTop", 0);
      }
    );

  }



  registerData(){
    this.user.name=this.name;
    this.user.email=this.email;
    this.user.password=this.password;

    this.userService.registerUser(this.user).subscribe(res=>{
      console.log("modiiiii");
      this.router.navigate(['/userhomepage'])
    });
  }
}
