import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ROUTING} from './app.routing';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { FlashMessagesModule } from 'angular2-flash-messages';
import {BootstrapAlertModule} from "ngx-bootstrap-alert";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NgxPaginationModule} from "ngx-pagination";
import { NgxEditorModule } from 'ngx-editor';
import {MatButtonModule} from '@angular/material';

import {TableListComponent} from "./table-list/table-list.component";
import { AppComponent } from './app.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { SideNavComponent } from './navigation-bar/side-nav.component';
import {AdminLoginComponent} from "./admin-login/admin-login.component";
import { CardsComponent } from './cards/cards.component';
import { AllReservationsComponent } from './all-reservations/all-reservations.component';
import { FooterComponent } from './footer/footer.component';
import { ConfirmedComponent } from './confirmed/confirmed.component';
import { RemovedComponent } from './removed/removed.component';
import { ReportComponent } from './report/report.component';
import {AuthGuard} from "./shared/auth.guard";
import {UserService} from "./shared/user.service";
import { UserHomepageComponent } from './user/user-homepage/user-homepage.component';
import { UserNavbarComponent } from './user/user-navbar/user-navbar.component';
import { UserFooterComponent } from './user/user-footer/user-footer.component';
import { UserReservationsComponent } from './user/user-reservations/user-reservations.component';
import { UserCardsComponent } from './user/user-cards/user-cards.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import {CustomerAuthGuard} from "./shared/customer-auth.guard";
import { MakeReservationComponent } from './user/make-reservation/make-reservation.component';
import { RegisterComponent } from './register/register.component';
import { ReservationFormComponent } from './user/reservation-form/reservation-form.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import {UserauthGuard} from "./shared/userauth.guard";
import { NewsComponent } from './news/news.component';
import { UserNewsComponent } from './user/user-news/user-news.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminDashboardComponent,
    AdminLoginComponent,
    TableListComponent,
    SideNavComponent,
    CardsComponent,
    AllReservationsComponent,
    FooterComponent,
    ConfirmedComponent,
    RemovedComponent,
    ReportComponent,
    UserHomepageComponent,
    UserNavbarComponent,
    UserFooterComponent,
    UserReservationsComponent,
    UserCardsComponent,
    UserLoginComponent,
    MakeReservationComponent,
    RegisterComponent,
    ReservationFormComponent,
    UserProfileComponent,
    NewsComponent,
    UserNewsComponent
  ],
  imports: [
    ROUTING,
    FormsModule,
    HttpClientModule,
    FlashMessagesModule.forRoot(),
    BrowserModule,
    BootstrapAlertModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    NgxEditorModule,
    MatButtonModule
  ],
  providers: [
    AuthGuard,
    UserService,
    UserauthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
