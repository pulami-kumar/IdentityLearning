import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NavbarServices } from './services/navBarServices/navBarService.service';
import { BookMeetingRoomComponent } from './components/book-meeting-room/book-meeting-room.component';
import { MeetingRoomApiService } from './services/apiServices/meetingRoomApiService.service';
import { ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import {MatMenuModule} from '@angular/material/menu';
import { MeetingRoomBookingsComponent } from './components/meeting-room-bookings/meeting-room-bookings.component';

@NgModule({
  declarations: [
    DashboardComponent,
    HomePageComponent,
    BookMeetingRoomComponent,
    MeetingRoomBookingsComponent,
  ],
  
  imports: [
    CommonModule,
    MainRoutingModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    TimepickerModule,
    MatMenuModule    
  ],

  providers: [
    NavbarServices,
    MeetingRoomApiService,
    DatePipe
  ]
})

export class MainModule { }