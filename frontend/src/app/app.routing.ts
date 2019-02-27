import {RouterModule,Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/compiler/src/core';

// import {HomeComponent} from "./home/home.component";
// import {AdminLoginComponent} from "./admin-login/admin-login.component";
import {AdminDashboardComponent} from "./admin-dashboard/admin-dashboard.component";
import {AllReservationsComponent} from "./all-reservations/all-reservations.component";
import {ReportComponent} from "./report/report.component";
import {AuthGuard} from "./shared/auth.guard";
import {UserauthGuard} from "./shared/userauth.guard";
import {UserHomepageComponent} from "./user/user-homepage/user-homepage.component";
import {UserReservationsComponent} from "./user/user-reservations/user-reservations.component";
import {UserLoginComponent} from "./user/user-login/user-login.component";
import {MakeReservationComponent} from "./user/make-reservation/make-reservation.component";
import {RegisterComponent} from "./register/register.component";
import {UserProfileComponent} from "./user/user-profile/user-profile.component";
import {NewsComponent} from "./news/news.component";

export const AppRoutes:Routes=[
  // {path:'home',component:HomeComponent},
  // {path:'adminlogin',component:AdminLoginComponent},
  {path:'admindashboard',component:AdminDashboardComponent,canActivate:[AuthGuard]},
  {path:'news',component:NewsComponent,canActivate:[AuthGuard]},
  {path:'allreservations',component:AllReservationsComponent,canActivate:[AuthGuard]},
  {path:'reports',component:ReportComponent,canActivate:[AuthGuard]},
  {path:'userhomepage',component:UserHomepageComponent},
  // {path:'home',component:UserReservationsComponent},
  {path:'login',component:UserLoginComponent},
  {path:'makereservation',component:MakeReservationComponent,canActivate:[UserauthGuard]},
  {path:'registration',component:RegisterComponent},
  {path:'userprofile',component:UserProfileComponent,canActivate:[UserauthGuard]}

];
export const ROUTING :ModuleWithProviders=RouterModule.forRoot(AppRoutes);
